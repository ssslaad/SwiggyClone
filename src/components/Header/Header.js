import React from "react";
import './header.css';
import logo from '../../public/app-logo.jpg';
import userAccountImage from '../../public/account_image.png';

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="company_logo"/>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Location</a></li>
                    <li className="search-bar">
                        <input type="text" placeholder="Search..."/>
                        <button type="submit">Search</button>
                    </li>
                    <li><img src={userAccountImage} alt="hi" className="userAccount"/></li>
                </ul>
            </nav>
        </div>
    )
}