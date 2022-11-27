import { projectDisplaySliceAction } from "./ProjectDisplaySlice";

export const deleteTab=(projectName,currentXPosition,currentTab,allTabs)=>{
    return async (dispacth)=>{
        console.log(projectName,allTabs)
        const tabIndex=allTabs.findIndex(el=>el.name.toLowerCase()!==projectName);
        if(!(currentTab!==allTabs[tabIndex].name.toLowerCase())){
            console.log("RES")
            const filteredTabs=allTabs.filter(el=>el.name.toLowerCase()!==projectName);
            dispacth(projectDisplaySliceAction.updateTab({updatedTabs:filteredTabs,xPosition:currentXPosition,currentTab:currentTab}))
        }

    }
}