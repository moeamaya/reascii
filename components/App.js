import React from 'react'
import Reascii, { Col, GridCount, Row } from './Reascii'

const App = () => {
  return (
    <Reascii>
      <GridCount />
      <Row>
        <Col id="1" fillChar="*" cols={6}>REASCII</Col>
        <Col id="2" fillChar="." cols={6} color="var(--color-brand)">○ DAY</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="." cols={6} color="var(--color-brand)">○ NIGHT</Col>
      </Row>
    </Reascii>
  );
}

export default App;