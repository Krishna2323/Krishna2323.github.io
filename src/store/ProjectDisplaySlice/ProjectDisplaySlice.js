import { createSlice } from "@reduxjs/toolkit";

const projectDisplaySlice = createSlice({
  name: "ui",
  initialState: {
    currentTab:"portfolio",
    xPosition:0,
    allTabs:[]
  },
  reducers: {
    updateTab(state,action){
      state.allTabs=action.payload.updatedTabs || state.allTabs
      state.currentTab=action.payload.currentTab;
      state.xPosition=action.payload.xPosition
    }
  },
});

export const projectDisplaySliceAction = projectDisplaySlice.actions;
export default projectDisplaySlice.reducer;