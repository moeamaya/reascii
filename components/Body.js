import React from "react";
import { Col, Row } from "./Reascii";

const Body = () => {
  return (
    <>
      <Row>
        <Col id="1" fillChar="─" cols={12} cap="│">
          │
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={12} />
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
        <Col id="2" cols={6}>
          .
        </Col>
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
        <Col id="2" cols={6} fillChar="&nbsp;" cap=".">
          .
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">
          Menu
        </Col>
        <Col id="2" cols={6} fillChar="&nbsp;" cap=".">
          .
        </Col>
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">
          ↳ 〖 ABOUT
        </Col>
        <Col id="2" fillChar=" " cols={6}>
          . &nbsp;┬─┐┌─┐┌─┐┌─┐┌─┐┬┬ <span style={{ color: "#ECF057" }}>JS</span>
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">
          ↳ ○ GET STARTED
        </Col>
        <Col id="2" cols={6} fillChar=" ">
          . &nbsp;├┬┘├┤ ├─┤└─┐│ &nbsp;││
        </Col>
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" ▒ " cols={3} fillColor="var(--color-brand)">
          ↳ ╰ DOCS
        </Col>
        <Col id="2" fillChar=" " cols={6}>
          . &nbsp;┴└─└─┘┴ ┴└─┘└─┘┴┴
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
        <Col id="2" fillChar=" " cols={6}>
          . &nbsp;Reascii.js
        </Col>
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
        <Col id="2" fillChar=" " cols={6} color="#DA8FDE">
          . &nbsp;Responsive ascii layouts in React
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
        <Col id="2" cols={6} fillChar=" ">
          .
        </Col>
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
        <Col id="2" cols={6} color="var(--color-brand)" fillChar=" ">
          .
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
        <Col id="2" cols={6} fillChar=".">
          .
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
        <Col id="2" cols={6} fillChar=" " />
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>

      <Row>
        <Col
          id="1"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
          cap="**"
        >
          ▒&nbsp;
        </Col>
        <Col id="2" cols={6} fillChar=" ">
          Reascii is a versatile React library designed to make it easy for
          developers to create and render ASCII art within their web
          applications. With Reascii, you can effortlessly build intricate and
          responsive ASCII layouts, making it perfect for displaying unique
          text-based content in your projects. This library empowers developers
          to compose complex ASCII structures using familiar JSX syntax,
          offering flexibility, control, and a rich feature set for creating
          stunning visual presentations in the browser. Whether you're
          developing a creative website or simply want to add a touch of ASCII
          art to your application, Reascii is the ideal tool for bringing this
          timeless art form to the digital realm with elegance and ease.
        </Col>
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
        <Col id="2" cols={6} fillChar=" " />
        <Col
          id="3"
          fillChar="&nbsp;▒"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          &nbsp;▒
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
        <Col id="2" cols={6} fillChar=" " />
        <Col
          id="3"
          fillChar="▒&nbsp;"
          cols={3}
          color="var(--color-brand)"
          fillColor="var(--color-brand)"
        >
          ▒&nbsp;
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          . QUICK EXAMPLE
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col
          id="2"
          fillChar="═"
          cols={6}
          color="#ECF057"
          fillColor="#ECF057"
          cap="╗&nbsp;&nbsp;"
        >
          &nbsp;╔
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        {/* <Col id="2" fillChar="." color="#ECF057" cap="#">&nbsp;&</Col> */}
        <Col
          id="2"
          fillChar="&nbsp;"
          cols={6}
          color="#ECF057"
          fillColor="#ECF057"
          cap="║░░"
        >
          &nbsp;║
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║ {"<Reascii>"}
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║ &nbsp;&nbsp;{"<Row>"}
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║ &nbsp;&nbsp;&nbsp;&nbsp;{'<Col cols="6">Re</Col>'}
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║ &nbsp;&nbsp;&nbsp;&nbsp;{'<Col cols="6">ascii</Col>'}
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║ &nbsp;&nbsp;{"</Row>"}
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║ {"</Reascii>"}
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col id="2" fillChar=" " cols={6} color="#ECF057">
          &nbsp;║
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar=" " cols={3} />
        <Col
          id="2"
          fillChar="═"
          cols={6}
          color="#ECF057"
          fillColor="#ECF057"
          cap="╝░░"
        >
          &nbsp;╚
        </Col>
        <Col id="3" fillChar=" " cols={3} />
      </Row>
      <Row>
        <Col id="1" fillChar="*" cols={3} lines="5">
          Hi
        </Col>
        <Col id="2" fillChar="═" cols={6}>
          ╚
        </Col>
        <Col id="3" fillChar="@" cols={3}>
          Hello
        </Col>
      </Row>
    </>
  );
};

export default Body;
