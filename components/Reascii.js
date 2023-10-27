import React from 'react';
import { CanvasProvider } from './useCanvas';
import Canvas from './Canvas';
import { Row } from './useRow';
import Col from './Col';
import GridCount from './GridCount';

const Reascii = ({ fill, children }) => {
  const fillChar = fill || '.';

  return (
    <CanvasProvider>
      <Canvas fill={fillChar}>
        {children}
      </Canvas>
    </CanvasProvider>
  )
}

export default Reascii;
export { Col, GridCount, Row };