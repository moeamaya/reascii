import React from 'react'
import Reascii, { Col, GridCount, Row } from './Reascii'

const App = () => {
  return (
    <Reascii>
      <GridCount />
      <Row>
        <Col id="1" fillChar="*" cols={3}>REASCII</Col>
        <Col id="2" cols={2} color="var(--color-brand)">○ DAY</Col>
        <Col id="3" cols={2} color="var(--color-brand)">○ FEATURED APIS</Col>
        <Col id="4" cols={2} color="var(--color-brand)">○ ABOUT</Col>
        <Col id="5" cols={2}>
          Testing this longer set of text to see how it wraps
          and making sure we handle it in code
        </Col>
        <Col id="6" cols={1} color="var(--color-brand)" align="right">{"{}"}</Col>
      </Row>
      <Row>
        <Col id="1" cols={6}>Sup</Col>
        <Col id="2" cols={6}>Dude</Col>
      </Row>
    </Reascii>
  );
}

export default App;