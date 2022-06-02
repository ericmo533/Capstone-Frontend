import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links-content-wrapper">
        <div className="links-wrapper">
          <NavLink exact to="/" activeClassName="link-active">
            Home
          </NavLink>
        </div>

        <div className="links-wrapper">
          <NavLink to="/about" activeClassName="link-active">
          About
          </NavLink>
        </div>

        <div className="links-wrapper">
          <NavLink to="/contact" activeClassName="link-active">
            Contact
          </NavLink>
        </div>

        <div className="links-wrapper">
          <NavLink to="/fleet" activeClassName="link-active">
          Fleet
          </NavLink>
        </div>

        <div className="links-wrapper">
          <NavLink to="/products" activeClassName="link-active">
            Gear
          </NavLink>
        </div>
      </div>

      <div className="copyright-wrapper">
          2022 Trident Yachts All rights reserved
      </div>
    </div>  
  )
}

  export default Footer;
  