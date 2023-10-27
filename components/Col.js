import React, { useEffect, useState } from 'react';
import { useRow } from './useRow';
import { useCanvas } from './useCanvas';

const Col = ({ id, cols, children, fillChar = ".", color, align = 'left' }) => {
  const [fill, setFill] = useState('');
  const [count, setCount] = useState(0);
  const { getLineCount, updateLineCount, getMaxLineCount } = useRow();
  const { canvas } = useCanvas();
  const { canvasWidth, asciiWidth, characterWidth } = canvas;

  const linesToRender = getMaxLineCount();
  // const responsiveDivider = canvasWidth > 576 ? 3 : 1;
  const responsiveWidth = canvasWidth > 576 ? asciiWidth * (cols/12) * characterWidth : canvasWidth;
  
  // Fills the column with the fillCharacter if the content is too short
  useEffect(() => {
    if (asciiWidth) {
      const contentString = (Array.isArray(children) ? children : [children])
        .map((child) =>
          typeof child === 'string' ? child : child.props ? child.props.children : ''
        )
        .join('');
      const contentLength = contentString.length;
      
      // Desktop
      const missingChars = (asciiWidth * (cols/12)) - contentLength;

      // Mobile
      // const missingChars = asciiWidth - contentLength;

      // console.log(contentString, missingChars, asciiWidth, contentLength)
      if (missingChars > 0) {
        setFill(fillChar.repeat(missingChars));
      }
    }
  }, [asciiWidth, fillChar, children]);


  // Sets the vertical line count for this column
  // TODO take into account responsive breakpoints
  // You don't need more lines in a vertical layout
  useEffect(() => {
    if (!asciiWidth) return;
    const lineCount = getLineCount(children, responsiveWidth);
    setCount(lineCount);
    updateLineCount(id, lineCount);
  }, [id, children, asciiWidth]);

  return (
    <div style={{display: "inline-block", width: `${(responsiveWidth)}px`, outline: "1px solid red", verticalAlign: "top"}}>
      {fill && align === 'right' && <span>{fill}</span>}
      <span style={{color}}>{children}</span>
      {fill && align === 'left' && <span>{fill}</span>}
      {/* Render additional fill lines if necessary */}
      {linesToRender !== -Infinity && Array.from({ length: linesToRender - count }).map((_, index) => (
        <div key={index}>
          {fillChar.repeat(asciiWidth * (cols/12))}
        </div>
      ))}
    </div>
  );
};
export default Col;