import React from "react";
import "./HeroIcons.scoped.scss"
import {Icons} from "./IconColors";


const HeroIcons=()=>{
    return (
      <div className="hero-icons">
        {Icons.map((e,i)=>(
        <div className="icons-div-wrapper">
          <div className="icons-div" style={{"--icon-num":i}} >
            <e.icon fill={e.color} style={e.size && {"--font-size":e.size}} />
          </div>
        </div>
        ))
        }
      </div>
    );
}

export default HeroIcons;