import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('http://localhost:5252/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    passwordHash: formData.password
                })
            });

            if (!res.ok) {
                const errText = await res.text();
                setError(errText || 'Registration failed');
                return;
            }

            navigate('/login'); // Redirect to login on success
        } catch (err) {
            console.error('Registration error:', err);
            setError('Something went wrong');
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h2 className="form-title">📝Register</h2>
                <form onSubmit={handleSubmit} className="form-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit">Register</button>
                </form>

                <p className="form-footer">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
