import React, { Fragment, useState } from "react";
import "./ProjectDisplay.scoped.scss"
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { projects } from "./ProjectLinks";

const ProjectView = (props)=>{
    const [loading,setLoading]=useState(true)

    const onProjectLoadStart=()=>{
      setLoading(true)
    }

    const onProjectLoad=()=>{
      setLoading(false)
    }

    return (
      <Fragment>
        <Transition in={true} unmountOnExit mountOnEnter timeout={300}>
          {(state) =>
              <div className={`project-view ${ "project-view-open"}`} >
                {loading && <Loader/>}
                <iframe
                  src={props.project.link}
                  title="W3Schools Free Online Web Tutorials"
                  className={`${"iframe-loaded"}`}
                  onLoad={onProjectLoad}
                  onLoadStart={onProjectLoadStart}>
                </iframe>
              </div>
            
          }
        </Transition>
      </Fragment>
    );

}

export default ProjectView;