import React, { useEffect } from "react";
import "./ProjectCard.scoped.scss";
import { BsClockHistory } from "react-icons/bs";
import { ImStack } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { projectDisplaySliceAction } from "../../../store/ProjectDisplaySlice/ProjectDisplaySlice";

const ProjectCard = (props) => {
  const dispacth = useDispatch();
  const { allTabs } = useSelector((state) => state.projectDisplay);
  const { name, link } = props.project;

  const handleCardClick = (e) => {
    dispacth(
      projectDisplaySliceAction.updateTab({
        xPosition: allTabs.length + 1,
        currentTab: name,
        updatedTabs: [...allTabs, { name: name, link: link }],
      })
    );
  };
  
  return (
    <div onClick={handleCardClick} className="project-card" style={{"--style":props.cardIndex}}>
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-card-front__inner">
            <div className="project-card-front__image-div">
              <img src={props.image} alt="Project-Screenshot" />
              <span>{name || "Specs 99"}</span>
            </div>
            <div className="project-card-front__tech-stack">
              <span>
                <span>
                  <ImStack />:
                </span>
                JavaScript, React, Redux, HTML, SCSS, Node.js, Express.js,
                Stripe.js,
              </span>
              <span>
                <BsClockHistory />: 2 Months{" "}
              </span>
              <span>
                <BsClockHistory />: 2 Months{" "}
              </span>
            </div>
            {/* <div className="project-card-front__icons-div">
              </div> */}
          </div>
        </div>
        <div className="project-card-back">
          <div className="project-card-back__inner">
            <div className="project-details">
              <span className="heading">Project Details:</span>
              <p className="detail">
                I completed this project while learning advanced JavaScript
                concepts from The Complete JavaScript Course by Jonas Scmetmann
                on Udemy. This project covered almost every concept of
                JavaScript and some advanced techniques to build complex
                front-end designs.
              </p>
            </div>
            <div className="project-concepts">
              <span className="heading">Concepts Covered:</span>
              <ul className="concepts">
                <li>DOM & DOM Manipulation</li>
                <li>The DRY Principle</li>
                <li>JS Engine & Runtime</li>
                <li>The Call Stack</li>
                <li>The Scope Chain</li>
                <li>The "this" Keyword</li>
                <li>Primitives vs Objects</li>
                <li>Data Structure</li>
                <li> Modern Operators</li>
                <li> Modern Operators</li>
                <li> Modern Operators</li>
                <li>"call", "apply" & "bind" Methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
