import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // 🧠 context import
import './Login.css';

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // 👈 grab login function from context

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('http://localhost:5252/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });

            if (!res.ok) {
                const err = await res.text();
                setError(err || 'Login failed');
                return;
            }

            const data = await res.json();
            login(data.token); // ✅ trigger login context and store token
            navigate('/'); // or home, wherever you want to go post-login
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong');
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h2 className="form-title">🔐 Login</h2>

                <form onSubmit={handleSubmit} className="form-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit">Login</button>
                </form>

                <p className="form-footer">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
