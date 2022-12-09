import React from "react";
import "./Resume.scoped.scss";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi2";

const Resume = () => {
  return (
    <section id="resume" className="resume container">
      <h3 className="heading-primary">Resume</h3>
      <div className="resume-inner">
        <div className="resume-inner-inner">
          <div className="block block__intro">
            <div>

            <span className="block__intro__name">Krishna Gupta</span>
            <span className="block__intro__field">
              Junior Full-Stack Developer / Web Designer
            </span>
            </div>
            <div className="block__intro__contact">
              <a
                className="block__intro__contact-number"
                href="tel:+91-9140938115"
              >
                <AiIcons.AiFillPhone />
                9140938115
              </a>
              <a
                className="block__intro__contact-email"
                href="mailto:belivethatkg@gmail.com"
              >
                <MdIcons.MdEmail /> belivethatkg@gmail.com
              </a>
              <a
                className="block__intro__contact-email"
                href="mailto:belivethatkg@gmail.com"
              >
                <AiIcons.AiFillTwitterCircle /> Twitter
              </a>
              <a
                className="block__intro__contact-email"
                href="mailto:belivethatkg@gmail.com"
              >
                <AiIcons.AiFillLinkedin /> LinkedIn
              </a>
              <a
                className="block__intro__contact-email"
                href="mailto:belivethatkg@gmail.com"
              >
                <AiIcons.AiFillGithub /> Github
              </a>
              <p className="block__intro__contact-address">
                <MdIcons.MdLocationOn /> Gorakhpur, India
              </p>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="block block__experience">
            <span className="block__experience-heading">
              Open Source / Project Experience (2019 - Current)
            </span>
            <div>
              <span>Frontend development : </span>
              <span>
                After completing 300+ hours of frontend courses in the last 3
                years from Udemy and some from Youtube by making 30+ real-world
                projects, I started contributing to an open-source project
                called Meshery. Currently, the areas I am contributing to are
                HTML, CSS/SCSS, Jeckyll, React, and Cytoscape.js. Until Now I
                have raised 50+ issues and created 25 PRs out of which 22 are
                merged. I have recently changed the structure of their website
                and created a dark mode for the website (
                <a
                  href="https://github.com/meshery/meshery.io/pull/870"
                  target={"_blank"}
                  className="link"
                >
                  PR link
                </a>
                ,{" "}
                <a
                  href="https://github.com/meshery/meshery.io/pull/918"
                  target={"_blank"}
                  className="link"
                >
                  PR link
                </a>
                ).
              </span>
            </div>
            <div>
              <span>Backend development : </span>
              <span>
                I have been learning and developing backend apps using Node.js
                for the last 2 years. Most of the I created projects are from
                the courses I have completed on Udemy. I created a
                Tour booking website using MERN stack and this year I had build
                a E-commerce website. I have been using MongoDB and Postgresql
                for the database, JWT for authentication, and Stripe for online
                payments. I also have completed a Docker & Kubernetes
                course in which I also learned and used a few AWS services for
                deployment.
              </span>
            </div>
          </div>
          <div className="block block__projects">
            <span className="block__projects-heading">Projects </span>
            <ul className="block__projects-list">
              <li>
                <span>
                  Forkify
                  <AiIcons.AiOutlineLink />
                </span>{" "}
                <HiIcons.HiArrowLongRight /> <span>HTML, SCSS, Javascript</span>
              </li>
              <li>
                <span>
                  Natours
                  <AiIcons.AiOutlineLink />
                </span>{" "}
                <HiIcons.HiArrowLongRight />{" "}
                <span>MERN, Redux, SCSS, Stripe </span>
              </li>
              <li>
                <span>
                  Specs99
                  <AiIcons.AiOutlineLink />
                </span>{" "}
                <HiIcons.HiArrowLongRight />{" "}
                <span>MERN, Redux, SCSS, Stripe</span>
              </li>
              <li>
                <span>
                  Bancker
                  <AiIcons.AiOutlineLink />
                </span>{" "}
                <HiIcons.HiArrowLongRight /> <span>HTML, SCSS, Javascript</span>
              </li>
              <li>
                <span>
                  Real
                  <AiIcons.AiOutlineLink />
                </span>{" "}
                <HiIcons.HiArrowLongRight /> <span>HTML, SCSS, Javascript</span>
              </li>
              <li>
                <span>
                  Forkify
                  <AiIcons.AiOutlineLink />
                </span>{" "}
                <HiIcons.HiArrowLongRight /> <span>HTML, SCSS, Javascript</span>
              </li>
            </ul>
          </div>
          <div className="block block__skills">
            <span className="block__skills-heading">Personal Skills</span>
            <ul className="block__skills-list">
              <li>Creativity</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Critical Thinking</li>
              <li>Willingness to Learn</li>
              <li>Time management</li>
            </ul>
          </div>
          <div className="block block__career-obj">
            <span className="block__career-obj-heading">Career Objective</span>
            <p className="block__career-obj-text">
              A self-taught full-stack developer with ability to learn and
              collaborate in rapidly changing environmets and compositions.
              Started learning full-stack devlopement at the age of 16 through
              600+ hours of bootcamp structure, learning HTML, CSS, JavaScript,
              TypeScript, React, Node.js, Data Structure and Algorithms MongoDB,
              Docker, Kubernetes, AWS. I have used my time to bring beautiful,
              responsive, and accessible website for the user. Eager to tackel
              web development/design challenges to achieve lasting impacts on
              user experience.
            </p>
          </div>
          <div className="block block__dev-skills">
            <span className="block__dev-skills-heading">Skills</span>
            <div>
              <div>
                <h4>Frontend</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Figma</li>
                  <li>Material UI</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div>
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>DSA</li>
                  <li>AWS</li>
                </ul>
              </div>{" "}
            </div>
          </div>
          <div className="block block__achievements">
            <h3>Achievements & Course Completions</h3>
          </div>
          {/* <div className="block block-7"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
