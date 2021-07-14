import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from '../src/pages/Header';
import Projects from "./pages/Projects";


function App() {
  return (  
  <Wrapper>
      <Nav />
      <Header />
      <Projects />
  </Wrapper>
  )
}

export default App;
