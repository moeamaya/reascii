import React, { forwardRef } from 'react';
import Column from './Column';
import { Row } from './useRow';
import { useCanvas } from './useCanvas';

const GridCount = forwardRef(( prop, ref ) => {
  const { canvas } = useCanvas();
  const { asciiWidth } = canvas;
  const { color } = prop;

  return (
    <Row>
      <div ref={ref} style={{ color: "#555" }}>
      <div>COLUMNS{"-".repeat(Math.max(asciiWidth - 7, 0))}</div>
        <Column id="1" fillChar="." cols={1} color="#777">▏1</Column>
        <Column id="2" fillChar="." cols={1} color="#777">▏2</Column>
        <Column id="3" fillChar="." cols={1} color="#777">▏3</Column>
        <Column id="4" fillChar="." cols={1} color="#777">▏4</Column>
        <Column id="5" fillChar="." cols={1} color="#777">▏5</Column>
        <Column id="6" fillChar="." cols={1} color="#777">▏6</Column>
        <Column id="7" fillChar="." cols={1} color="#777">▏7</Column>
        <Column id="8" fillChar="." cols={1} color="#777">▏8</Column>
        <Column id="9" fillChar="." cols={1} color="#777">▏9</Column>
        <Column id="10" fillChar="." cols={1} color="#777">▏10</Column>
        <Column id="11" fillChar="." cols={1} color="#777">▏11</Column>
        <Column id="12" fillChar="." cols={1} color="#777">▏12</Column>
        <div style={{color: "#555"}}>{".".repeat(asciiWidth)}</div>
        <div style={{color: "#555"}}>{".".repeat(asciiWidth)}</div>
      </div>
    </Row>
  );
});

export default GridCount;