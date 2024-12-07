import React from "react";
import './headerComponent.css';
import logo from '../../public/app-logo.jpg';

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="hi"/>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                
                    <li className="search-bar">
                        <input type="text" placeholder="Search..."/>
                        <button type="submit">Search</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

