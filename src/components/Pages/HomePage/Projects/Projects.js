import React from "react";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import "./Projects.scoped.scss";
import PR_SS_01 from "../../../assets/Images/Hero-Sections/PR-SS-01.png"
import PR_SS_02 from "../../../assets/Images/Hero-Sections/PR-SS-02.png"
import PR_SS_04 from "../../../assets/Images/Hero-Sections/PR-SS-04.png"

const Projects=()=>{

    return (
        <div className="projects-section container">
            <h3 className="heading-primary">Projects</h3>
            <div className="projects">
                <ProjectCard cardIndex={1} image={PR_SS_01} project={{name:"Forkify",link:"https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcd09"}}/>
                <ProjectCard cardIndex={2} image={PR_SS_02} project={{name:"Natours",link:"https://natoursapp.herokuapp.com/"}}/>
                <ProjectCard cardIndex={3} image={PR_SS_04} project={{name:"Specs99",link:"https://specs99v2.herokuapp.com/"}}/>
                <ProjectCard cardIndex={4} image={PR_SS_02} project={{name:"Natours",link:"https://natoursapp.herokuapp.com/"}}/>
                <ProjectCard cardIndex={5} image={PR_SS_04} project={{name:"Specs99",link:"https://specs99v2.herokuapp.com/"}}/>
                <ProjectCard cardIndex={6} image={PR_SS_01} project={{name:"Forkify",link:"https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcd09"}}/>
            </div>
        </div>
    )

}

export default Projects;