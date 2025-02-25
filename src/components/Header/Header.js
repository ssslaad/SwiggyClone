import React, { useEffect, useState } from "react";
import logo from '../../public/app-logo-1.jpg';
import userAccountImage from '../../public/account_image.png';
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import { NavLink } from "react-router";

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

    const dropDownHeaderBtnCss = "w-full block text-center p-2 hover:bg-[#f79e38]";
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
        <li className="relative group p-2"> 
            <img src={profile.picture}
                alt="user_account_image"
                className="h-8 w-auto rounded-full cursor-pointer" />
            <ul className="absolute hidden group-hover:flex flex-col shadow-md rounded-lg w-auto items-left min-w-[200px] max-w-[90vw] right-0 mt-2 z-50 bg-white">
                <li>
                    <a href="#" onClick={()=>{console.log("MyProfilePage")}} 
                        className={dropDownHeaderBtnCss}>
                            My Profile
                    </a>
                </li>
                <li>
                    <a href="#" onClick={logout} 
                        className={dropDownHeaderBtnCss}>
                            Log out
                    </a>
                </li>
            </ul>
        </li>
    ) : (
        <li className="relative group p-2"  >
            <img src={userAccountImage}
                alt="user_account_image"
                className="h-8 w-auto rounded-full cursor-pointer" />
            <ul className="absolute hidden group-hover:flex flex-col shadow-md rounded-lg w-auto items-left min-w-[200px] max-w-[90vw] right-0 mt-2 z-50 bg-white">
                <li><a href="#" onClick={login} className={dropDownHeaderBtnCss}>Sign in with Google 🚀</a></li>
            </ul>
        </li>
    );

    return (
        <nav className="flex justify-between items-center max-h-20 mt-1 w-4/5 mx-auto">
            
            <NavLink to="/">
                <img src={logo} alt="company_logo" className="h-20 w-auto"/>
            </NavLink>
            
            <ul className="gap-x-3 items-center hidden md:flex">
                <li>
                    <NavLink to="/" className={({isActive}) => `hover:bg-[#f79e38] ${isActive ? "bg-[#f79e38] p-2 rounded-full" : "p-2 rounded-full" }`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => `hover:bg-[#f79e38] ${isActive ? "bg-[#f79e38] p-2 rounded-full" : "p-2 rounded-full" }`}>About Us</NavLink>
                </li>
                {loginStatus}
            </ul>
        </nav>
    )
}