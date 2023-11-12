import React, { useEffect, useRef } from "react";
import { useCanvas } from "./useCanvas";

// Function to calculate character width based on its display
const calculateCharacterWidth = (char) => {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.innerText = char.repeat(25);
  document.body.appendChild(span);
  const width = span.offsetWidth / 25;
  document.body.removeChild(span);
  return width;
};

const largestMultipleOf12 = (number) => {
  return Math.floor(number / 12) * 12;
};

const Canvas = ({ fill, children }) => {
  const parentContainerRef = useRef();
  const { updateCanvas } = useCanvas();

  const fillChar = fill || ".";

  useEffect(() => {
    if (parentContainerRef.current) {
      const parentElement = parentContainerRef.current.parentNode;
      if (parentElement) {
        const canvasWidth = parentElement.clientWidth;
        const characterWidth = calculateCharacterWidth(fillChar);
        const asciiWidth = largestMultipleOf12(canvasWidth / characterWidth);

        updateCanvas({
          asciiWidth,
          canvasWidth,
          characterWidth,
        });
      }
    }
  }, []);

  return (
    <div ref={parentContainerRef} style={{ outline: `1px solid transparent` }}>
      {children}
    </div>
  );
};

export default Canvas;
