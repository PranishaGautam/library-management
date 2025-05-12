import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext'; // 👈 new
import BookCatalog from './pages/BookCatalog';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        {/* Add ProtectedRoute here for BookCatalog */}
                        <Route path="/catalog" element={<ProtectedRoute><BookCatalog /></ProtectedRoute>} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
