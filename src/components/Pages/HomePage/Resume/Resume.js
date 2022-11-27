import React from "react";
import "./Resume.scoped.scss";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi2";

const Resume = () => {
  return (
    <section className="resume container">
      <h3 className="heading-primary">Resume</h3>
      <div className="resume-inner">
        <div className="resume-inner-inner">
          <div className="block block__intro">
            <span className="block__intro__name">Krishna Gupta</span>
            <span className="block__intro__field">
              Junior Full-Stack Developer / Web Designer
            </span>
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
              Open Source / Project Experience
            </span>
            <p>
              Started learning HTML, CSS & JavaScript in 2019 from Youtube,
              after the first year passed I switched to Udemy for more detailed
              learning of the technologies and started making projects. After
              completing 500+ hours of bootcamp on Udemy, I got a really good
              understanding and practicle experience of the frontend, backend
              and some cloud technologies. After mastering frontend & learning
              enough technologies, I decided to contribute to open source
              projects to learn how to colloborate with other engineers and to
              gain some real world experience. I have been continuously
              contributing to Layer5 projects from last 2 months.
            </p>
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
              <li>Problem Solving</li>
              <li>Problem Solving</li>
              <li>Problem Solving</li>
              <li>Problem Solving</li>
              <li>Problem Solving</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="block block__career-obj">
            <span className="block__career-obj-heading">Career Objective</span>
            <p className="block__career-obj-text">
              A 19 years old self taught software engineer with ability to learn
              and collaborate in rapidly changing environmets and compositions.
              At the age of 16, started learning web devlopement through 600+
              hours of bootcamp structure, learning HTML, CSS, JavaScript,
              React, Node.js, TypeScript, MongoDB, Docker, Kubernetes, AWS.
              Eager to tackel complex web development/design challenges to
              achieve lasting impacts on user experience.
            </p>
          </div>
          <div className="block block-5"></div>
          <div className="block block-6"></div>
          <div className="block block-7"></div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
