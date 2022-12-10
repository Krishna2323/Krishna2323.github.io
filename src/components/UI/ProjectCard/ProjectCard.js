import React from "react";
import "./ProjectCard.scoped.scss";
import { BsCheck2All } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTab } from "../../../store/ProjectDisplaySlice/ProjectDisplayActions";

const ProjectCard = (props) => {
  const dispacth = useDispatch();
  const { allTabs } = useSelector((state) => state.projectDisplay);
  const { project, index } = props;

  let animateCardClass=props.animate?"project-card--animate":"";
  const handleCardClick = (e) => {
    dispacth(addTab(project.title, project.link, allTabs));
  };

  return (
    <div className={`project-card ${animateCardClass}`} style={{ "--style": index }}>
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-card-front__inner">
            <div className="project-card-front__image-div">
              <img src={project.image} alt="Project-Screenshot" />
              <span>{project.title}</span>
            </div>
            <div className="project-card-front__tech-stack">
              <span>
                <span>
                  Tech Stack:
                </span>
                {project.techStack.map((e) => e)}
              </span>
              {/* ///////////////////////// */}
              <span>
                {/* <BsClockHistory />: 2 Months{" "} */}
                <span>Time Spent:</span>
                {project.timeSpent}
              </span>
              <span>
                <span>Responsive:</span>
                {project.responsive ? <BsCheck2All /> : <IoCloseOutline />}
              </span>
            </div>
            {/* <div className="project-card-front__icons-div">
              </div> */}
          </div>
        </div>
        <div className="project-card-back">
          <div className="project-card-back__inner">
            <div className="project-details">
              <span className="heading">Project Description:</span>
              <p className="detail">{project.projectDescription}</p>
            </div>
            <div className="project-concepts">
              <span className="heading">Concepts Covered:</span>
              <ul className="concepts">
                {project.conceptsCovered.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {/* <button className="btn-secondary">More Details</button> */}
              {!project.notDeployed ? (
                <button onClick={handleCardClick} className="btn-secondary">
                  View Project
                </button>
              ) : (
                <a
                  className="btn-secondary"
                  rel="noreferrer"
                  target={"_blank"}
                  href={project.link}
                >
                  View on Github
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
