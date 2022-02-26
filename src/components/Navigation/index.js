import React from 'react';
import navStyle from './nav-style.module.css';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/done" className={navStyle.title} style={{color: "#c2caf8"}}><h1>Done</h1></NavLink>
          <p style={{width: "2rem", heigh: "2rem"}}/>
          <NavLink to="/" className={navStyle.title} style={{color: "#091e94"}}><h1>Uncomplish</h1></NavLink>
       </div>
    );
}
 
export default Navigation;

