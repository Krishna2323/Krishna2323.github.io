import React from "react";
import Header from "../../Layout/Header/Header";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import "./HomePage.scoped.scss";
import { Transition } from "react-transition-group";
import Resume from "./Resume/Resume";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const display = true;
  return (
    <Transition in={true} mountOnEnter unmountOnExit timeout={1000}>
      <div className={`home-pages home-pages--${display ? "open" : "close"}`}>
        <Header />
          <Hero />
          <Projects />
          <Resume/>
          <Footer/>
      </div>
    </Transition>
  );
};

export default HomePage;
