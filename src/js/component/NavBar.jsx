import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) =>{
  return(
    <nav className="nav navbar bg-secondary">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"  width="30" height="24" className="d-inline-block align-text-top"/>
        Bootstrap
      </a>
      <ul className="nav justify-content-end">
        <li className="nav-item  bg-primary mx-2 rounded-3">
          <a className="nav-link text-light" href="#">Home</a>
        </li>
        <li className="nav-item  bg-primary mx-2 rounded-3">
          <a className="nav-link text-light" href="#">About</a>
        </li>
        <li className="nav-item  bg-primary mx-2 rounded-3">
          <a className="nav-link text-light" href="#">Service</a>
        </li>
        <li className="nav-item  bg-primary mx-2 rounded-3">
          <a className="nav-link text-light" href="#" >Contact</a>
        </li>
      </ul>
    </div>
    
  </nav>
);
};
NavBar.prototype = {
    imgText: PropTypes.string,
    imgUrl:PropTypes.string,
    item1: PropTypes.string,
    item2: PropTypes.string,  
    item3: PropTypes.string,
    item4: PropTypes.string,

}
export default NavBar;