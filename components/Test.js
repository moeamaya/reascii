import React from "react";
import { Col, Row } from "./Reascii";

const Test = () => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          color: "var(--color-brand)",
          background: "#292b30",
        }}
      >
        <Row>
          <Col cols={3}>
            <h3>&nbsp;○MENU○&nbsp;</h3>
            <br />
            <li>&nbsp;↳ 〖 ABOUT</li>
            <li>&nbsp;↳ ○ GET STARTED</li>
            <li>&nbsp;↳ → API</li>
            <li>&nbsp;↳ ╰ DOCS</li>
            <li>&nbsp;↳ ╝ EXAMPLES</li>
          </Col>
          <Col cols={6}>Read more</Col>
        </Row>
      </div>
      <Row>
        <Col id="1" cols={6} lines="55">
          Steady
        </Col>
        <Col id="2" cols={6} fillChar="$">
          Fready
        </Col>
      </Row>
    </>
  );
};

export default Test;
