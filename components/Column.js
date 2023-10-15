import React, { useEffect, useState } from 'react';
import { useLineCount } from './useLineCount';

const Column = ({ id, cols, width, children, fillChar, characterWidth, color, align = 'left', childColor = 'inherit' }) => {
  const [fill, setFill] = useState('');
  const [count, setCount] = useState(0);
  const { getLineCount, updateLineCount, getMaxLineCount } = useLineCount();

  const linesToRender = getMaxLineCount();

  useEffect(() => {
    if (width && fillChar) {
      const contentString = (Array.isArray(children) ? children : [children])
        .map((child) =>
          typeof child === 'string' ? child : child.props ? child.props.children : ''
        )
        .join('');
      const contentLength = contentString.length;
      const missingChars = (width * (cols/12)) - contentLength;
      if (missingChars > 0) {
        setFill(fillChar.repeat(missingChars));
      }
    }
  }, [width, fillChar, children]);

  useEffect(() => {
    if (!width) return;
    const lineCount = getLineCount(children, width * (cols/12) * characterWidth);
    setCount(lineCount);
    updateLineCount(id, lineCount);
  }, [id, children, width]);

  return (
    <div style={{display: "inline-block", width: `${(width * (cols/12) * characterWidth)}px`, outline: "1px solid transparent"}}>
      {fill && align === 'right' && <span>{fill}</span>}
      <span style={{color}}>{children}</span>
      {fill && align === 'left' && <span>{fill}</span>}
      {/* Render additional fill lines if necessary */}
      {linesToRender !== -Infinity && Array.from({ length: linesToRender - count }).map((_, index) => (
        <div key={index}>
          {fillChar.repeat(width * (cols / 12))}
        </div>
      ))}
    </div>
  );
};
export default Column;