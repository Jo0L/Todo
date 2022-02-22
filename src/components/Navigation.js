import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/done">DONE</NavLink>
          <NavLink to="/">UNCOMPLISH</NavLink>
       </div>
    );
}
 
export default Navigation;

