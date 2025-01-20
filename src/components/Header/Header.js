import React, { useEffect, useState } from "react";
import './header.css';
import logo from '../../public/app-logo.jpg';
import userAccountImage from '../../public/account_image.png';
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';

export default function Header() {

    const [profile, setProfile] = useState([]);
    const [user, setUser] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(()=>{
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },[user]);

    const logout = () =>{
        googleLogout();
        setProfile(null);
    }


    let loginStatus = profile ? (
        <div className="user-account">
            <li>
                <img src={profile.picture}
                    alt="user_account_image"
                    className="user-account-image" />
                <div className="dropdown-menu">
                    <ul>
                        <li><a href="#" onClick={logout}>Log out</a></li>
                    </ul>
                </div>
            </li>
        </div>
    ) : (
        <div className="user-account">
            <li>
                <img src={userAccountImage}
                    alt="user_account_image"
                    className="user-account-image" />
                <div className="dropdown-menu">
                    <ul>
                        <li><a href="#" onClick={login}>Sign in with Google 🚀</a></li>
                    </ul>
                </div>
            </li>
        </div>
    );

    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="company_logo" />
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Location</a></li>
                    {loginStatus}
                </ul>
            </nav>
        </div>
    )
}