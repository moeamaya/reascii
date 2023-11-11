import React from "react";
import { Col, Row } from "./Reascii";

const Header = () => {
  return (
    <>
      <Row>
        <Col id="1" fillChar="─" cols={12} cap="│">
          │!54321
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar="╱╲" cols={12} fillColor="#DA8FDE" cap="│">
          │
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar="─" cols={12} cap="│">
          │
        </Col>
      </Row>
      <Row>
        <Col id="1" fillChar="&nbsp;° ┘ └ °&nbsp;" cols={12} cap="│">
          │
        </Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;&nbsp;╝&nbsp;&nbsp;&nbsp;╚&nbsp;&nbsp;"
          cols={12}
          cap="│"
        >
          │
        </Col>
      </Row>
    </>
  );
};

export default Header;
