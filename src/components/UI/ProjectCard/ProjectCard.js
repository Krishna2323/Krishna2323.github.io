import React, { useEffect } from "react";
import "./ProjectCard.scoped.scss";
import { BsCheck2All } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { projectDisplaySliceAction } from "../../../store/ProjectDisplaySlice/ProjectDisplaySlice";

const ProjectCard = (props) => {
  const dispacth = useDispatch();
  const { allTabs } = useSelector((state) => state.projectDisplay);
  const { project,index } = props;

  const handleCardClick = (e) => {
    dispacth(
      projectDisplaySliceAction.updateTab({
        xPosition: allTabs.length + 1,
        currentTab: project.title,
        updatedTabs: [...allTabs, { name: project.title, link: project.link }],
      })
    );
  };

  return (
    <div className="project-card" style={{ "--style": index }}>
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
                  {/* <ImStack />: */}
                  Tech Stack:
                </span>
                {project.techStack.map(e=>e)}
              </span>
              {/* ///////////////////////// */}
              <span>
                {/* <BsClockHistory />: 2 Months{" "} */}
                <span>Time Spent:</span>{project.timeSpent}
              </span>
              <span>
                <span>Responsive:</span>
                {project.responsive?
                <BsCheck2All />:
                <IoCloseOutline />
                }
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
              <p className="detail">
                {project.projectDescription}
              </p>
            </div>
            <div className="project-concepts">
              <span className="heading">Concepts Covered:</span>
              <ul className="concepts">
                {project.conceptsCovered.map(e=><li>{e}</li>)}
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
