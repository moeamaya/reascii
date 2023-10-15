import React, { forwardRef } from 'react';
import Column from './Column';
import { LineCountProvider } from './useLineCount';

const GridCount = forwardRef(( prop, ref ) => {
  const color = prop.color;
  const canvasWidth = prop.canvasWidth;
  const characterWidth = prop.characterWidth;
  console.log('canvasWidth', canvasWidth);

  return (
    <LineCountProvider>
      <div ref={ref} style={{ color: "#555" }}>
      <div>COLUMNS{"-".repeat(Math.max(canvasWidth - 7, 0))}</div>
        <Column id="1" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏1</Column>
        <Column id="2" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏2</Column>
        <Column id="3" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏3</Column>
        <Column id="4" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏4</Column>
        <Column id="5" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏5</Column>
        <Column id="6" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏6</Column>
        <Column id="7" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏7</Column>
        <Column id="8" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏8</Column>
        <Column id="9" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏9</Column>
        <Column id="10" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏10</Column>
        <Column id="11" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏11</Column>
        <Column id="12" fillChar="." cols={1} width={canvasWidth} characterWidth={characterWidth} color="#777">▏12</Column>
        <div style={{color: "#555"}}>{".".repeat(canvasWidth)}</div>
        <div style={{color: "#555"}}>{".".repeat(canvasWidth)}</div>
      </div>
    </LineCountProvider>
  );
});

export default GridCount;