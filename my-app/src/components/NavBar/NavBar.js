//rafce
import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";
import logo from "./Logo.jpg"

const NavBar = () => {
    return (
        <nav className="Navigation">
            <img className="Logo" src={logo} alt="logo"/>
            <ul className="List-ul">
                <li><a href="www.google.com">Home</a></li>
                <li><a href="www.google.com">Contact</a></li>
                <li><a href="www.google.com">Shop</a></li>
                <li><Shop /></li>
            </ul>
        </nav>
    )
};

export default NavBar;