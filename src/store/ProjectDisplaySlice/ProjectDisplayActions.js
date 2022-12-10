import { projectDisplaySliceAction } from "./ProjectDisplaySlice";

export const deleteTab = (
  projectName,
  currentXPosition,
  currentTab,
  allTabs
) => {
  return async (dispacth) => {
    console.log(projectName, allTabs);
    const tabIndex = allTabs.findIndex(
      (el) => el.name.toLowerCase() === projectName.toLowerCase()
    );
    const previousTab=allTabs[tabIndex-1]
    let filteredTabs=allTabs.filter(e=>e.xPosition!==allTabs[tabIndex].xPosition)
    console.log(filteredTabs)
    dispacth(
        projectDisplaySliceAction.updateTab({
          xPosition: tabIndex,
          currentTab: previousTab?previousTab.name:"portfolio",
          updatedTabs: [...filteredTabs],
        })
      );
  };
};

export const addTab = (projectName, projectLink, allTabs) => {
  return async (dispacth) => {
    let findTab = allTabs.findIndex((e) => e.name === projectName);
    console.log(findTab);
    if (findTab > -1) {
      dispacth(
        projectDisplaySliceAction.updateTab({
          xPosition: findTab + 1,
          currentTab: allTabs[findTab].name,
          updatedTabs: [...allTabs],
        })
      );
    } else {
      dispacth(
        projectDisplaySliceAction.updateTab({
          xPosition: allTabs.length + 1,
          currentTab: projectName,
          updatedTabs: [...allTabs, { name: projectName, link: projectLink, xPosition:allTabs.length + 1}],
        })
      );
    }
  };
};
