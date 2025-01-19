import React, { useEffect, useState } from "react";
import './header.css';
import logo from '../../public/app-logo.jpg';
import userAccountImage from '../../public/account_image.png';

export default function Header() {
    
    const [loginState, setLoginState] = useState('Login');
    
    const changeLoginStatus = (e) => {
        e.preventDefault();
        if(loginState === 'Login'){
            setLoginState('Logout');
        }else{
            setLoginState('Login');
        }
    }

    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="company_logo"/>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Location</a></li>
                    <div className="user-account">
                        <li>
                            <img src={userAccountImage} 
                                    alt="user_account_image" 
                                    className="user-account-image"/>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#" onClick={changeLoginStatus}>{loginState}</a></li>
                                </ul>
                            </div>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}