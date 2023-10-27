import React, { useEffect, useRef } from 'react';
import { useCanvas } from './useCanvas';

// Function to calculate character width based on its display
const calculateCharacterWidth = (char) => {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.innerText = char.repeat(25)
  document.body.appendChild(span);
  const width = span.offsetWidth / 25;
  document.body.removeChild(span);
  return width;
};

const Reascii = ({ background, fill, children }) => {
  const parentContainerRef = useRef();
  const { updateCanvas } = useCanvas();

  const bgColor = background || 'var(--color-contrast)';
  const fillChar = fill || '.';

  useEffect(() => {
    if (parentContainerRef.current) {
      const parentElement = parentContainerRef.current.parentNode;
      if (parentElement) {
        const canvasWidth = parentElement.clientWidth;
        const characterWidth = calculateCharacterWidth(fillChar);
        const asciiWidth = Math.floor(canvasWidth / characterWidth);

        updateCanvas({
          canvasWidth,
          asciiWidth,
          characterWidth
        });
      }
    }
  }, []);

  return (
    <div ref={parentContainerRef} style={{ backgroundColor: bgColor, outline: `1px solid transparent` }}>
      {children}
    </div>
  )
}

export default Reascii;