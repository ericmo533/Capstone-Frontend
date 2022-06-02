import React, { useState } from "react";
import "../style/navigation.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../pictures/Trident Neptune2.png';



export default function NavigationComponent () {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResponsiveClick = () => {
        setMenuOpen(!menuOpen);
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }


  return (
    <div className="nav-wrapper">
      <div className="left-side">
          <div className="HTlogo">
          <img src={Logo} height={200} width={200} />
          </div>
      </div>
      <div className="menu-icon" onClick={handleResponsiveClick}>
          {menuOpen ? <FontAwesomeIcon className="responsive-icon" icon="fa-solid fa-xmark" /> : <FontAwesomeIcon className="responsive-icon" icon="fa-solid fa-bars" />}
      </div>

      <div className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        <div className="right-side">
          <div className="nav-link-wrapper">
              <NavLink exact to="/" activeClassName="nav-link-active" onClick={handleLinkClick}>
                Home
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/about" activeClassName="nav-link-active" onClick={handleLinkClick}>
                About
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/contact" activeClassName="nav-link-active" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/fleet" activeClassName="nav-link-active" onClick={handleLinkClick}>
                Fleet
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <div className="neptune">
              <NavLink to="/gear" activeClassName="nav-link-active" onClick={handleLinkClick}>
              Neptune's Gear
              </NavLink>
              </div>
            </div>
          
            
            <div className="cart">
              <NavLink to="/cart" activeClassName="nav-link-active" onClick={handleLinkClick}>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-cart-flatbed" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

