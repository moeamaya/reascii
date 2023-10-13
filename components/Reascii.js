import React, { useEffect, useState, useRef } from 'react';
import Column from './Column';
import { LineCountProvider } from './useLineCount';

const h2 = {
  margin: 0
}

// Function to calculate character width based on its display
const calculateCharacterWidth = (char, textColor, bgColor) => {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.color = textColor;
  span.style.backgroundColor = bgColor;
  span.innerText = char;
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
};

const Reascii = ({ border, padding, color, background, fill, columns }) => {
  const parentContainerRef = useRef();
  const [borderWidth, setBorderWidth] = useState(0);
  const [characterWidth, setCharacterWidth] = useState(0);

  // Define default values
  const borderStyle = {
    top: border.top || ':',
    bottom: border.bottom || ':',
  };
  const paddingValue = padding || 0;
  const textColor = color || 'var(--color-brand)';
  const bgColor = background || 'var(--color-contrast)';
  const fillChar = fill || '.';

  useEffect(() => {
    if (parentContainerRef.current) {
      const parentElement = parentContainerRef.current.parentNode;
      if (parentElement) {
        const parentWidth = parentElement.clientWidth;
        const charWidth = calculateCharacterWidth(fillChar, textColor, bgColor);
        setCharacterWidth(charWidth);

        const calculatedBorderWidth = Math.floor(parentWidth / charWidth);
        setBorderWidth(calculatedBorderWidth);
      }
    }
  }, []);

  // console.log(borderWidth);
  // console.log(characterWidth);

  return (
    <LineCountProvider>
      <div ref={parentContainerRef} style={{ color: textColor, backgroundColor: bgColor, outline: `1px solid #eee` }}>
        <div data-ascii={borderStyle.top.repeat(borderWidth)}>{borderStyle.top.repeat(borderWidth)}</div>
        <Column id="1" fillChar="." cols={3} width={borderWidth} characterWidth={characterWidth}>ROBOTIST</Column>
        {/* <Column id="2" fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>○ DAY</Column> */}
        {/* <Column id="3" fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>○ FEATURED APIS</Column> */}
        {/* <Column id="4" fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>○ ABOUT</Column> */}
        <Column id="5" fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>Testing this one with way more text than you should ever have</Column>
        {/* <Column id="6" fillChar="." cols={2} width={borderWidth} characterWidth={characterWidth}>?SEARCH?</Column> */}
        {borderStyle.bottom.repeat(borderWidth)}
      </div>
    </LineCountProvider>
  );
}

export default Reascii;