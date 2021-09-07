import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from '../src/pages/Header';
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from './pages/About'


function App() {
  return (  
  <Wrapper>
      <Nav />
      <Header />
      <Projects />
      {/* <Skills /> */}
      <About />
  </Wrapper>
  )
}

export default App;
