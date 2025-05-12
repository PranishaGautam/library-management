import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar-wrapper">
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/browse">Browse</Link>
                        </li>
                        <li>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
