import React from "react";
import Reascii, { Col, GridCount, Row } from "./Reascii";
import Body from "./Body";
import Header from "./Header";

const App = () => {
  return (
    <Reascii>
      <GridCount />
      <Header />
      <Body />
    </Reascii>
  );
};

export default App;
