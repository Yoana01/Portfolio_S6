import React, { useEffect } from 'react'
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import { NavigationBar, StyledLink } from "./styleComponents/navBar.Style"
import '../App.css';
import Logo from "../Logo.png"
// import './navBar.css';

function NavBar() {

let activeStyle = {
  color: "#FFCDB2", 
  textDecoration : "underline"
}

  return (  
    <div  >
       {/* <img src={Logo} style={{width: '100px', height:"100px" }} /> */}
      <NavigationBar>
         <NavLink  id="nav-link"  to={"/home"}    style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  >Home</NavLink> 
        <NavLink  id="nav-link"to={"/"}style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  >Projects</NavLink>
        <NavLink id="nav-link" to={"/about"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  >About Me</NavLink>
               {/* <NavLink id="nav-link" to={"/caseStudyPortfolio"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  >me</NavLink> */}
     </NavigationBar>
       {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
          <Outlet />
    </div>
  )
}

export default NavBar
