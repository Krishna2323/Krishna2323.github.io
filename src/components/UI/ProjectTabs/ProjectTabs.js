import React, { Fragment, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { projectDisplaySliceAction } from "../../../store/ProjectDisplaySlice/ProjectDisplaySlice";
import { AiFillCloseCircle } from "react-icons/ai";
import "./ProjectTabs.scoped.scss";
import { deleteTab } from "../../../store/ProjectDisplaySlice/ProjectDisplayActions";

const ProjectTabs = () => {
  const dispacth = useDispatch();
  const { allTabs,currentTab,xPosition:currentXPosition } = useSelector((state) => state.projectDisplay);
  const activeTab=(name)=>currentTab && currentTab.toLowerCase()===name.toLowerCase();

  const onTabClick = (e) => {
    if(e.target.localName==="path" || e.target.localName==="svg")return;
    dispacth(
      projectDisplaySliceAction.updateTab({
        xPosition: e.target.dataset.xPosition,
        currentTab:e.target.dataset.projectName,
      })
    );
  };

  const onCloseIconClick=(e)=>{
    let closest=e.target.closest("span")
    console.log(closest.dataset)
    dispacth(deleteTab(closest.dataset.projectName,currentXPosition,currentTab,allTabs))
  }

  useEffect(()=>{
    console.log(currentTab)
  },[currentTab])

  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={`project-tabs`}>
          <span onClick={onTabClick} className={activeTab("portfolio") && "active"} data-project-name="portfolio" data-x-position={0}>
            Portfolio
          </span>
          {allTabs && allTabs.map((e,i) => (
            <span onClick={onTabClick} className={e.name && activeTab(e.name) && "active"} data-project-name={e.name && e.name.toLowerCase()} data-x-position={i+1}>
              {e.name} <AiFillCloseCircle onClick={onCloseIconClick}/>
            </span>
          ))}
        </div>,
        document.getElementById("project-tabs")
      )}
    </Fragment>
  );
};

export default ProjectTabs;
