import React, { useEffect } from "react";
import "./Hero.scoped.scss";
import HeroIcons from "./HeroIcons";
import PR_SS_01 from "../../../assets/Images/Hero-Sections/PR-SS-01.png";
import PR_SS_02 from "../../../assets/Images/Hero-Sections/PR-SS-02.png";
import PR_SS_04 from "../../../assets/Images/Hero-Sections/PR-SS-04.png";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-text container">
        <span>
          Hello, <span>I'm Krishna,</span>
          <span className="special-text">
            Full-Stack Developer & Web Designer.
          </span>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          aliquet, neque in posuere euismod, dui eros congue velit, non
          consequat orci arcu in mauris. In fringilla ante vitae ullamcorper
          bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
          <img src={PR_SS_01} alt="Project-SS-01" />
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
          <img src={PR_SS_02} alt="Project-SS-02" />
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
          <img src={PR_SS_04} alt="Project-SS-04" />
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
