import React, { useEffect } from "react";
import "./Hero.scoped.scss";
import HeroIcons from "./HeroIcons";
import Forkify from "../../../assets/Images/Hero-Sections/Forkify.png";
import Omnifood from "../../../assets/Images/Hero-Sections/Omnifood.png";
import Bankist from "../../../assets/Images/Hero-Sections/Bankist.png";

const Hero = () => {
  return (
    <section className="hero " id="hero">
      <div className="hero-text container">
        <span>
          Hello, <span>I'm Krishna,</span>
          <span className="special-text">
            Full-Stack Developer & Web Designer.
          </span>
        </span>
        <p>
          A self-taught full-stack developer with ability to learn and
          collaborate in rapidly changing environmets and compositions. Started
          learning full-stack devlopement at the age of 16 through 600+ hours of
          bootcamp structure. I have used my time to bring beautiful, responsive, and
          accessible website for the user. Eager to tackel web
          development/design challenges to achieve lasting impacts on user
          experience.
        </p>
        <HeroIcons />
      </div>
      {/* /////////////////////// */}
      <div className="hero-images container">
        <div
          style={{
            "--translateY": "-95%",
            "--translateX": "-25%",
            "--image-num": 0,
          }}
        >
          <img src={Forkify} alt="Project-SS-01" />
          <div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div
          style={{
            "--translateY": "-15%",
            "--translateX": "-5%",
            "--image-num": 1,
          }}
        >
          <img src={Bankist} alt="Project-SS-02" />
          <div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div
          style={{
            "--translateY": "65%",
            "--translateX": "15%",
            "--image-num": 2,
          }}
        >
          <img src={Omnifood} alt="Project-SS-04" />
          <div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
