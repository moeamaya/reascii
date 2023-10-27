import React from 'react'
import Reascii, { Col, GridCount, Row } from './Reascii'


const App = () => {
  return (
    <Reascii>
      <GridCount color="var(--color-contrast)" />
      <Row>
        <Col id="1" fillChar="*" cols={6}>REASCII</Col>
        <Col id="2" fillChar="." cols={6} color="var(--color-brand)">○ DAY</Col>
      </Row>
      <GridCount />
    </Reascii>
  );
}

export default App;