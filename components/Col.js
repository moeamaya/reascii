import React, { useEffect, useState } from "react";
import { useRow } from "./useRow";
import { useCanvas } from "./useCanvas";

const Col = ({
  id,
  cols,
  children,
  fillChar = ".",
  color,
  align = "left",
  lines = null,
  fillColor = "inherit",
  start = null,
  end = null,
}) => {
  const BLANK = "\u00A0";
  const COLUMNS = 12;

  const [fill, setFill] = useState("");
  const [count, setCount] = useState(0);
  const { getLineCount, updateLineCount, getMaxLineCount } = useRow();
  const { canvas } = useCanvas();
  const { canvasWidth, asciiWidth, characterWidth } = canvas;

  const linesToRender = getMaxLineCount();
  // const responsiveDivider = canvasWidth > 576 ? 3 : 1;
  const responsiveWidth =
    canvasWidth > 576
      ? asciiWidth * (cols / COLUMNS) * characterWidth
      : canvasWidth;

  // Fills the column with the fillCharacter if the content is too short
  useEffect(() => {
    if (asciiWidth) {
      const contentString = (Array.isArray(children) ? children : [children])
        .map((child) => {
          if (child && typeof child === "string") {
            return child.trim() || BLANK;
          } else if (child && child.props) {
            const childContent = child.props.children;
            return typeof childContent === "string"
              ? childContent.trim() || BLANK
              : childContent;
          } else {
            return BLANK;
          }
        })
        .join("");
      const contentLength = contentString.length;

      // Desktop
      const minChars = Math.floor(asciiWidth * (cols / COLUMNS));

      const missingChars =
        asciiWidth * (cols / COLUMNS) -
        contentLength -
        (start ? start.length : 0) -
        (end ? end.length : 0);

      // Mobile
      // const missingChars = asciiWidth - contentLength;

      if (missingChars > 0) {
        let currentFillChar = fillChar.repeat(missingChars / fillChar.length);
        const emptySpace =
          parseInt(minChars) -
          (parseInt(currentFillChar.length) + parseInt(contentString.length)) -
          (start ? start.length : 0) -
          (end ? end.length : 0);

        console.log(
          "content: " + contentString,
          "minChars: " + minChars,
          "currentFillChar:" + currentFillChar.length,
          "contentLength: " + contentString.length,
          "totalChars: " +
            (parseInt(currentFillChar.length) + parseInt(contentString.length)),
          "emptySpace: " + emptySpace
        );

        emptySpace > 0
          ? (currentFillChar += BLANK.repeat(emptySpace))
          : currentFillChar;

        setFill(currentFillChar);
      }
    }
  }, [asciiWidth, fillChar, children]);

  // Sets the vertical line count for this column
  // TODO take into account responsive breakpoints
  // You don't need more lines in a vertical layout
  useEffect(() => {
    if (!asciiWidth) return;
    const lineCount = lines ? lines : getLineCount(children, responsiveWidth);
    setCount(lineCount);
    updateLineCount(id, lineCount);
  }, [id, children, asciiWidth]);

  const renderAdditionalFillLines = () => {
    return (
      linesToRender !== -Infinity &&
      Array.from({ length: lines ? lines - 1 : linesToRender - count }).map(
        (_, index) => {
          const fillCount =
            (asciiWidth * (cols / COLUMNS) -
              (start ? start.length : 0) -
              (end ? end.length : 0)) /
            fillChar.length;
          const fill = fillChar.repeat(fillCount);
          let line = fill;
          line = start ? start + line : line;
          line = end ? line + end : line;
          return (
            <div
              data-count={fillCount}
              key={index}
              style={{ color: fillColor }}
            >
              {line}
            </div>
          );
        }
      )
    );
  };

  return (
    <div
      style={{
        display: "inline-block",
        width: `${responsiveWidth}px`,
        outline: "1px solid transparent",
        verticalAlign: "top",
      }}
    >
      {start}
      {fill && align === "right" && (
        <span style={{ color: fillColor }}>{fill}</span>
      )}
      <span style={{ color }}>{children}</span>
      {fill && align === "left" && (
        <span style={{ color: fillColor }}>{fill}</span>
      )}
      {end}

      {/* Render additional fill lines if necessary */}
      {renderAdditionalFillLines()}
    </div>
  );
};
export default Col;
