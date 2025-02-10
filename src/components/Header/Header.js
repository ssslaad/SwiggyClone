import React, { useEffect, useState } from "react";
import './header.css';
import logo from '../../public/app-logo.jpg';
import userAccountImage from '../../public/account_image.png';
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import { Link } from "react-router";

export default function Header() {

    const [profile, setProfile] = useState(null);
    const [user, setUser] = useState(()=>{
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            localStorage.setItem("user",JSON.stringify(codeResponse));
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(()=>{
        if (user && user.access_token) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    localStorage.setItem("profile",JSON.stringify(res.data));
                })
                .catch((err) => console.log(err));
        }else{
            const storedProfile = localStorage.getItem("profile");
            if(storedProfile) setProfile(JSON.parse(storedProfile));
        }
    },[user]);

    const logout = () =>{
        googleLogout();
        setProfile(null);
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("profile");
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    {loginStatus}
                </ul>
            </nav>
        </div>
    )
}