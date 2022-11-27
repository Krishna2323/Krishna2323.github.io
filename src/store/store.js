import { configureStore } from "@reduxjs/toolkit";
import ProjectDisplaySlice from "./ProjectDisplaySlice/ProjectDisplaySlice";


const store = configureStore({
  reducer: {
    projectDisplay:ProjectDisplaySlice
  },
});

export default store;