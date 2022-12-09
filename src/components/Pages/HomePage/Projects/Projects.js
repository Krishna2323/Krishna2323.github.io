import React from "react";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import "./Projects.scoped.scss";
import Forkify from "../../../assets/Images/Hero-Sections/Forkify.png"
import Natours from "../../../assets/Images/Hero-Sections/Natours.png"
import Omnifood from "../../../assets/Images/Hero-Sections/Omnifood.png"
import Specs99 from "../../../assets/Images/Hero-Sections/Specs99.png"
import Bankist from "../../../assets/Images/Hero-Sections/Bankist.png"
import Portfolio from "../../../assets/Images/Hero-Sections/Portfolio.png"



const Projects=()=>{

    return (
        <div className="projects-section container" id="projects">
            <h3 className="heading-primary">Projects</h3>
            <div className="projects">
                {/* <ProjectCard cardIndex={1} image={Natours} project={{name:"Natours",link:"https://natoursapp.herokuapp.com/"}}/> */}
                {/* <ProjectCard cardIndex={2} image={Specs99} project={{name:"Specs99",link:"https://specs99v2.herokuapp.com/"}}/> */}
                <ProjectCard cardIndex={1} image={Omnifood} project={{name:"Omnifood",link:"https://lively-kleicha-55527e.netlify.app/"}}/>
                <ProjectCard cardIndex={2} image={Forkify} project={{name:"Forkify",link:"https://quiet-travesseiro-698e66.netlify.app/"}}/>
                <ProjectCard cardIndex={3} image={Bankist} project={{name:"Bankist",link:"https://magical-paprenjak-e2a068.netlify.app/"}}/>
                <ProjectCard cardIndex={4} image={Portfolio} project={{name:"Portfolio",link:"https://natoursapp.herokuapp.com/"}}/>
            </div>
        </div>
    )

}

export default Projects;