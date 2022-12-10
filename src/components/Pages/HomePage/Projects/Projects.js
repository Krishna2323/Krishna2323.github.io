import React from "react";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import "./Projects.scoped.scss";
import Forkify from "../../../assets/Images/Hero-Sections/Forkify.png"
import Natours from "../../../assets/Images/Hero-Sections/Natours.png"
import Omnifood from "../../../assets/Images/Hero-Sections/Omnifood.png"
import Specs99 from "../../../assets/Images/Hero-Sections/Specs99.png"
import Bankist from "../../../assets/Images/Hero-Sections/Bankist.png"
import Portfolio from "../../../assets/Images/Hero-Sections/Portfolio.png"
import { mernProjects, projects } from "./projectDetails";
import { IoAlertCircle } from "react-icons/io5";



const Projects=()=>{

    return (
        <div className="projects-section container" id="projects">
            <h3 className="heading-primary">Frontend Projects</h3>
            <div className="projects">
            {projects.map((project,i)=><ProjectCard project={project} index={i}/>)}
            </div>
            <h3 className="heading-primary">MERN stack Projects</h3>
            <span className="warning"><IoAlertCircle/> These projects may take 30-40 seconds to load as they are hosted on a free server.</span>
            <div className="projects">
            {mernProjects.map((project,i)=><ProjectCard project={project} index={i} />)}
            </div>
        </div>
    )

}

export default Projects;