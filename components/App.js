import React from 'react'
import Reascii from './Reascii'
import { CanvasProvider } from './useCanvas';
import GridCount from './GridCount';
import { Row } from './useRow';
import Col from './Col';

const App = () => {
  return (
    <div>
      <CanvasProvider>
        <Reascii border={{top: " ▚", bottom: "▎"}}>
          <GridCount color="var(--color-contrast)" />
          <Row>
            <Col id="1" fillChar="*" cols={6}>REASCII</Col>
            <Col id="2" fillChar="." cols={6} color="var(--color-brand)">○ DAY</Col>
          </Row>
        </Reascii>
      </CanvasProvider>
    </div>
  );
}

export default App;