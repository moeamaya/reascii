import React, { useEffect, useRef } from 'react';
import Column from './Column';
import { Row } from './useRow';
import { useCanvas } from './useCanvas';
import GridCount from './GridCount';

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

const Reascii = ({ border, color, background, fill }) => {
  const parentContainerRef = useRef();
  const { canvas, updateCanvas } = useCanvas();
  const { asciiWidth } = canvas;

  // Define default values
  const borderStyle = {
    top: border.top || ':',
    bottom: border.bottom || ':',
  };
  const textColor = color || 'var(--color-brand)';
  const bgColor = background || 'var(--color-contrast)';
  const fillChar = fill || '.';

  useEffect(() => {
    if (parentContainerRef.current) {
      const parentElement = parentContainerRef.current.parentNode;
      if (parentElement) {
        const parentWidth = parentElement.clientWidth;
        const charWidth = calculateCharacterWidth(fillChar, textColor, bgColor);
        const calculatedBorderWidth = Math.floor(parentWidth / charWidth);

        updateCanvas({
          canvasWidth: parentWidth,
          asciiWidth: calculatedBorderWidth,
          characterWidth: charWidth
        });
      }
    }
  }, []);

  return (
    <>
      <GridCount color={bgColor} />
      <Row>
        <div ref={parentContainerRef} style={{ backgroundColor: bgColor, outline: `1px solid transparent` }}>
          <div data-ascii={borderStyle.top.repeat(asciiWidth)}>{borderStyle.top.repeat(asciiWidth)}</div>
          <div>{".".repeat(asciiWidth)}</div>
          <Column id="1" fillChar="*" cols={3}>REASCII</Column>
          <Column id="2" fillChar="." cols={2} color={textColor}>○ DAY</Column>
          <Column id="3" fillChar="." cols={2} color={textColor}>○ FEATURED APIS</Column>
          <Column id="4" fillChar="." cols={2} color={textColor}>○ ABOUT</Column>
          <Column id="5" fillChar="." cols={2} color={textColor}>
            Testing this one with way more text than you should ever have
          </Column>
          <Column id="6" fillChar="." cols={1} align='right'>{"{}"}</Column>
        </div>
      </Row>
    </>
  );
}

export default Reascii;