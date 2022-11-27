import "./App.scoped.scss"
import { useSelector } from "react-redux";
import ProjectTabs from "./components/UI/ProjectTabs/ProjectTabs";
import HomePage from "./components/Pages/HomePage/HomePage"
import ProjectView from "./components/UI/ProjectDisplay/ProjectDisplay";
import { useEffect } from "react";

function App() {
  const { allTabs,xPosition } = useSelector((state) => state.projectDisplay);
  useEffect(()=>{
    console.log(xPosition)
  },[])
  return (
    <div className="App" >
      <ProjectTabs/>
      <div className="App-inner" style={{transform:`translateX(-${xPosition*100}%)`}}>
      <HomePage/>
      {allTabs && allTabs.map((e,i)=>
        <ProjectView project={{link:e.link}} xPosition={i+1}/>
      )}
      </div>
    </div>
  );
}

export default App;
