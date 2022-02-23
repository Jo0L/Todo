import React from 'react';
import navStyle from './nav-style.module.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/done" className={navStyle.title} style={{color: "#ca3831"}}><h1>Done</h1></NavLink>
          <p style={{width: "2rem", heigh: "2rem"}}/>
          <NavLink to="/" className={navStyle.title} style={{color: "#317dca"}}><h1>Uncomplish</h1></NavLink>
       </div>
    );
}
 
export default Navigation;

