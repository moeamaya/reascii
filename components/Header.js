import React from "react";
import { Col, Row } from "./Reascii";

const Header = () => {
  return (
    <>
      <Row>
        <Col id="1" fillChar="─" cols={12} start="│" end="│"></Col>
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="╱╲"
          cols={12}
          fillColor="#DA8FDE"
          start="│"
          end="│"
        />
      </Row>
      <Row>
        <Col id="1" fillChar="─" cols={12} start="│" end="│" />
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;° ┘ └ °&nbsp;"
          cols={12}
          start="│"
          end="│"
        />
      </Row>
      <Row>
        <Col
          id="1"
          fillChar="&nbsp;&nbsp;╝&nbsp;&nbsp;&nbsp;╚&nbsp;&nbsp;"
          cols={12}
          start="│"
          end="│"
        />
      </Row>
      <Row>
        <Col id="1" fillChar="─" cols={12} start="│" end="│" />
      </Row>
    </>
  );
};

export default Header;
