import React from "react";
import "./Header.scoped.scss"
import KrLogo from "../../assets/Images/Logo/Krishna.png"

const Header=()=>{
    return(
        <header className="header ">
            <nav>
                <img alt="Logo" src={KrLogo}/>
                <ul>
                    <li data-code={0}>About</li>
                    <li data-code={1}>Projects</li>
                    <li data-code={2}>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;