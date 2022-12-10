import React, { useEffect, useState } from "react";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import "./Projects.scoped.scss";
import { mernProjects, projects } from "./projectDetails";
import { IoAlertCircle } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  let [animate, setAnimate] = useState(false);
  let [animateMERN, setAnimateMERN] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { ref: mernRef, inView: mernInView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (!animate && inView) {
      setAnimate(true);
    }
  }, [inView]);
  useEffect(() => {
    if (!animateMERN && mernInView) {
      setAnimateMERN(true);
    }
  }, [mernInView]);

  return (
    <div className="projects-section container" id="projects">
      <h3 ref={ref} className="heading-primary">
        Frontend Projects
      </h3>
      <div className="projects">
        {projects.map((project, i) => (
          <ProjectCard
            animate={animate}
            key={project.link}
            project={project}
            index={i}
          />
        ))}
      </div>
      <h3 className="heading-primary">MERN stack Projects</h3>
      <span className="warning">
        <IoAlertCircle /> These projects may take 30-40 seconds to load as they
        are hosted on a free server.
      </span>
      <div ref={mernRef} className="projects">
        {mernProjects.map((project, i) => (
          <ProjectCard
            animate={animateMERN}
            key={project.link}
            project={project}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
