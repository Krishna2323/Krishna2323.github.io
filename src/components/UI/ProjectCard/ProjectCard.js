import React, { useEffect } from "react";
import "./ProjectCard.scoped.scss";
import { BsCheck2All } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
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
    <div className="project-card" style={{ "--style": props.cardIndex }}>
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
                  {/* <ImStack />: */}
                  Tech Stack:
                </span>
                JavaScript, React, Redux, HTML
              </span>
              {/* ///////////////////////// */}
              <span>
                {/* <BsClockHistory />: 2 Months{" "} */}
                <span>Time Spent:</span>2 Months
              </span>
              <span>
                <span>Responsive:</span>
                {/* 15 */}
                {/* <BsClockHistory />: 2 Months{" "} */}
                <BsCheck2All />
                <IoCloseOutline />
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
                This project was focused on learning best practices with HTML,
                learning CSS from basics to some advanced technique and after
                that basics of SASS/SCSS. This project also tought me the
                techniques to build responsive websites using Grid/Flexbox.
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
            <div className="project-links">
              {/* <button className="btn-secondary">More Details</button> */}
              <button onClick={handleCardClick} className="btn-secondary">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
