import React, { forwardRef } from 'react';
import Col from './Col';
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
        <Col id="1" fillChar="." cols={1} color="#DA8FDE">⬐ 1</Col>
        <Col id="2" fillChar="." cols={1} color="#DA8FDE">⬐ 2</Col>
        <Col id="3" fillChar="." cols={1} color="#DA8FDE">⬐ 3</Col>
        <Col id="4" fillChar="." cols={1} color="#DA8FDE">⬐ 4</Col>
        <Col id="5" fillChar="." cols={1} color="#DA8FDE">⬐ 5</Col>
        <Col id="6" fillChar="." cols={1} color="#DA8FDE">⬐ 6</Col>
        <Col id="7" fillChar="." cols={1} color="#DA8FDE">⬐ 7</Col>
        <Col id="8" fillChar="." cols={1} color="#DA8FDE">⬐ 8</Col>
        <Col id="9" fillChar="." cols={1} color="#DA8FDE">⬐ 9</Col>
        <Col id="10" fillChar="." cols={1} color="#DA8FDE">⬐ 10</Col>
        <Col id="11" fillChar="." cols={1} color="#DA8FDE">⬐ 11</Col>
        <Col id="12" fillChar="." cols={1} color="#DA8FDE">⬐ 12</Col>
        <div style={{color: "#555"}}>{".".repeat(asciiWidth)}</div>
        <div style={{color: "#555"}}>{".".repeat(asciiWidth)}</div>
      </div>
    </Row>
  );
});

export default GridCount;