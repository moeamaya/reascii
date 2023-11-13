import React from "react";
import Reascii, { Col, GridCount, Row } from "./Reascii";
import Body from "./Body";
import Test from "./Test";
import Header from "./Header";

const App = () => {
  return (
    <Reascii>
      {/* <GridCount /> */}
      <Header />
      {/* <Body /> */}
      <Test />
    </Reascii>
  );
};

export default App;
