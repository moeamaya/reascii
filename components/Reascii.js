import React, { useEffect, useState, useRef } from 'react';
import Column from './Column';
import { LineCountProvider } from './useLineCount';
import { useCanvas } from './useCanvas';
import GridCount from './GridCount';

const h2 = {
  margin: 0
}

// Function to calculate character width based on its display
const calculateCharacterWidth = (char) => {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.innerText = char.repeat(25)
  document.body.appendChild(span);
  const width = span.offsetWidth / 25;
  document.body.removeChild(span);
  console.log('width', width)
  return width;
};

const Reascii = ({ border, padding, color, background, fill }) => {
  const parentContainerRef = useRef();
  const { canvas, updateCanvas } = useCanvas();
  const { asciiWidth } = canvas;

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
      <LineCountProvider>
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
      </LineCountProvider>
      <LineCountProvider>
        <div ref={parentContainerRef} style={{ backgroundColor: bgColor, outline: `1px solid transparent` }}>
          <Column id="1" fillChar="." cols={3}>.</Column>
          <Column id="2" fillChar="." cols={2} color={textColor}>● NIGHT</Column>
          <Column id="3" fillChar="." cols={2} color={textColor}>○ ALL CATEGORIES</Column>
          <Column id="4" fillChar="." cols={2} color={textColor}>.</Column>
          <Column id="5" fillChar="." cols={2}>There were some interesting ideas here</Column>
          <Column id="6" fillChar="." cols={1}>.</Column>
          <div>{".".repeat(asciiWidth)}</div>
          {borderStyle.bottom.repeat(asciiWidth)}
        </div>
      </LineCountProvider>
      <div style={{color: "#444"}}>
        <div>{".".repeat(asciiWidth)}</div>
        <div>{".".repeat(asciiWidth)}</div>
        <div>{".".repeat(asciiWidth)}</div>
        <GridCount color={bgColor} />
      </div>
      <LineCountProvider>
        <div ref={parentContainerRef} style={{ backgroundColor: bgColor, outline: `1px solid transparent` }}>
          <Column id="1" fillChar="." cols={3}>Menu</Column>
          <Column id="2" fillChar="." cols={7} color={textColor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper. Rutrum quisque non tellus orci ac 
          auctor augue mauris augue. Pretium vulputate sapien nec sagittis aliquam malesuada. Duis convallis 
          convallis tellus id interdum velit laoreet. Laoreet non curabitur gravida arcu. Sem et tortor consequat 
          id porta nibh venenatis cras. Diam maecenas sed enim ut sem. Ullamcorper a lacus vestibulum sed arcu non odio. 
          Congue nisi vitae suscipit tellus mauris a. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. 
          Luctus accumsan tortor posuere ac ut consequat semper viverra. Urna porttitor rhoncus dolor purus non enim praesent. 
          Risus ultricies tristique nulla aliquet. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nisi
          scelerisque eu ultrices vitae auctor. Ipsum consequat nisl vel pretium lectus quam. Enim neque volutpat ac
          tincidunt vitae semper quis. Ut sem viverra aliquet eget sit amet. Vestibulum morbi blandit cursus risus at ultrices.

          Tristique senectus et netus et malesuada fames. Ac turpis egestas sed tempus urna et pharetra pharetra. Massa massa ultricies
          mi quis. Vitae turpis massa sed elementum tempus egestas sed sed risus. Mauris augue neque gravida in fermentum et sollicitudin ac.
          Nisi quis eleifend quam adipiscing. Elementum sagittis vitae et leo duis ut. Vestibulum lectus mauris ultrices eros in. Malesuada
          fames ac turpis egestas sed tempus. Quis eleifend quam adipiscing vitae proin sagittis. Morbi tempus iaculis urna id volutpat lacus
          laoreet non curabitur. Enim nunc faucibus a pellentesque sit amet. Auctor augue mauris augue neque gravida. Enim tortor at auctor
          urna nunc id cursus. Massa sed elementum tempus egestas sed sed risus pretium. Sit amet nulla facilisi morbi tempus iaculis urna id
          volutpat. Id aliquet lectus proin nibh. Nunc scelerisque viverra mauris in aliquam. Sit amet consectetur adipiscing elit. Nisl suscipit
          adipiscing bibendum est ultricies integer.

          Non tellus orci ac auctor. Aliquet lectus proin nibh nisl condimentum id venenatis. Vitae tortor condimentum lacinia quis vel eros donec ac.
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Ultricies tristique nulla aliquet enim tortor at
          auctor urna. Vel pharetra vel turpis nunc eget lorem dolor. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Porttitor massa
          id neque aliquam vestibulum. Eu volutpat odio facilisis mauris sit amet. Magna ac placerat vestibulum lectus mauris ultrices eros.
          Egestas egestas fringilla phasellus faucibus. Neque aliquam vestibulum morbi blandit cursus risus at. Est placerat in egestas erat
          imperdiet sed euismod nisi. Fusce id velit ut tortor pretium. Morbi tristique senectus et netus et malesuada fames. Ut placerat orci
          nulla pellentesque dignissim enim sit amet venenatis.
          </Column>
          <Column id="3" fillChar="." cols={2} color={textColor}>○ ALL CATEGORIES</Column>
          {borderStyle.bottom.repeat(asciiWidth)}
        </div>
      </LineCountProvider>
    </>
  );
}

export default Reascii;