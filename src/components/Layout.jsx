import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Layout.css'; // Make sure this CSS file exists

const Layout = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <>
            <nav className="layout-navbar">
                <Link to="/" className="nav-link">Home</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/catalog" className="nav-link">Browse</Link> {/* Updated here */}
                        <Link to="/profile" className="nav-link">Profile</Link>
                        <button onClick={logout} className="nav-link logout-btn">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
