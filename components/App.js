import React from 'react'
import Reascii, { Col, GridCount, Row } from './Reascii'

const App = () => {
  return (
    <Reascii>
      <GridCount />
      <Row>
        <Col id="1" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
        <Col id="2" cols={6} color="var(--color-brand)">.</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
        <Col id="2" cols={6} fillChar=" " color="#DA8FDE">.</Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">Menu</Col>
        <Col id="2" cols={6} fillChar=" " color="#ECF057">.</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3}color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">↳ 〖 ABOUT</Col>
        <Col id="2" fillChar=" " cols={6}>. &nbsp;┬─┐┌─┐┌─┐┌─┐┌─┐┬┬ <span style={{color: "#ECF057"}}>JS</span></Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">↳ ○ GET STARTED</Col>
        <Col id="2" cols={6} fillChar=" ">. &nbsp;├┬┘├┤ ├─┤└─┐│  &nbsp;││</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">↳ ╰ DOCS</Col>
        <Col id="2" fillChar=" " cols={6}>. &nbsp;┴└─└─┘┴ ┴└─┘└─┘┴┴</Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
      <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
        <Col id="2" fillChar=" " cols={6}>. &nbsp;Reascii.js</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
        <Col id="2" fillChar=" " cols={6} color="#DA8FDE">. &nbsp;Responsive ascii layouts in React</Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
        <Col id="2" cols={6} fillChar=" ">.</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
      </Row>
      <Row>
      <Col id="1" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
        <Col id="2" cols={6} color="var(--color-brand)">.</Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
        <Col id="2" cols={6} fillChar=" " color="#DA8FDE"> </Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
        <Col id="2" cols={6} fillChar=" ">. Text block...</Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
      </Row>

      {/* Section */}
      <Row>
        <Col id="1" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
        <Col id="2" cols={6} fillChar=" " color="#DA8FDE"> </Col>
        <Col id="3" fillChar="▒&nbsp;" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">▒&nbsp;</Col>
      </Row>
      <Row>
        <Col id="1" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
        <Col id="2" cols={6} fillChar=" "> </Col>
        <Col id="3" fillChar="&nbsp;▒" cols={3} color="var(--color-brand)" fillColor="var(--color-brand)">&nbsp;▒</Col>
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