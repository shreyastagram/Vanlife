import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    const navigate = useNavigate();

    useEffect(() => {
       
        const loggedIn = localStorage.getItem("loggedin");
        if (loggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    function fakeLogOut() {
        localStorage.removeItem("loggedin");
        setIsLoggedIn(false); 
        navigate("/login"); 
    }

    return (
        <header className="header">
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav className="nav-links">
                <NavLink
                    to="/host"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Vans
                </NavLink>
                    <Link to="/login" className="login-link">
                        <img src={imageUrl} className="login-icon" alt="Login Icon" />
                    </Link>
                    <Link to="/login" className="logout-link" onClick={fakeLogOut}>
                            <button className="logout-button">Logout</button>
                    </Link>
            </nav>
        </header>
    );
}
