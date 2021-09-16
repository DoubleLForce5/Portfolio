import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from '../src/pages/Header';
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from './pages/About'
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ScrollButton from "./components/ScrollButton";


function App() {
  return (  
  <Wrapper>
      <Nav />
      <Header />
      <Projects />
      {/* <Skills /> */}
      <About />
      <Contact />
      <Footer />
      <ScrollButton />
  </Wrapper>
  )
}

export default App;
