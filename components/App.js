import React from 'react'
import Reascii, { Col, GridCount, Row } from './Reascii'

const App = () => {
  return (
    <Reascii>
      <GridCount />
      <Row>
        <Col id="1" fillChar="&nbsp;▒" cols={3} color="#BCFCED" fillColor="#BCFCED">&nbsp;▒</Col>
        <Col id="2" cols={6} color="var(--color-brand)">.</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="#BCFCED" fillColor="#BCFCED">&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="▒&nbsp;" cols={3} color="#BCFCED" fillColor="#BCFCED">▒&nbsp;</Col>
        <Col id="2" cols={6} fillChar=" " color="#DA8FDE"> </Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="#BCFCED" fillColor="#BCFCED">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="#BCFCED">Menu</Col>
        <Col id="2" cols={6} fillChar=" "color="var(--color-brand)">
          . REASCII.JS
        </Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3}color="#BCFCED" fillColor="#BCFCED">&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="#BCFCED">↳ 〖 ABOUT</Col>
        <Col id="2" fillChar=" " cols={6} color="var(--color-brand)"> </Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} fillColor="#BCFCED">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3}>↳ ○ GET STARTED</Col>
        <Col id="2" cols={6} fillChar="›" color="#DA8FDE">
          . Responsive ascii layouts in React
        </Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3}>&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3}>↳ ╰ DOCS</Col>
        <Col id="2" fillChar=" " cols={6}> </Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3}>▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒" cols={3}> </Col>
        <Col id="2" fillChar="." cols={6}> </Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3}>&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">. QUICK EXAMPLE</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar="═" cols={6} color="#ECF057">&nbsp;╔</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║ {"<Reascii>"}</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║ &nbsp;&nbsp;{"<Row>"}</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║ &nbsp;&nbsp;&nbsp;&nbsp;{'<Col cols="6">Re</Col>'}</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║ &nbsp;&nbsp;&nbsp;&nbsp;{'<Col cols="6">ascii</Col>'}</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║ &nbsp;&nbsp;{"</Row>"}</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║ {"</Reascii>"}</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar=" " cols={6} color="#ECF057">&nbsp;║</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3}> </Col>
        <Col id="2" fillChar="═" cols={6} color="#ECF057">&nbsp;╚</Col>
        <Col id="3" fillChar=" " cols={3}> </Col>
      </Row>
      <Row>
        <Col id="1" fillChar="*" cols={3} lines="5">Hi</Col>
        <Col id="2" fillChar="═" cols={6}>╚</Col>
        <Col id="3" fillChar="@" cols={3}>Hello</Col>
      </Row>
    </Reascii>
  );
}

export default App;