import React, { useState, useEffect } from 'react';
import './Admin.css';
import { api } from '../../services/api';
import ProjectsAdmin from './ProjectsAdmin';
import BlogAdmin from './BlogAdmin';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

function AdminApp() {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [view, setView] = useState('projects'); // 'projects', 'blog', 'contact', 'newsletter', 'ai'

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.access_token);
        setToken(data.access_token);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  if (!token) {
    return (
      <div className="admin-login-container">
        <form onSubmit={login} className="admin-login-form">
          <h2>Admin Login</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li className={view === 'projects' ? 'active' : ''} onClick={() => setView('projects')}>Projects</li>
          <li className={view === 'blog' ? 'active' : ''} onClick={() => setView('blog')}>Blog</li>
          <li className={view === 'contact' ? 'active' : ''} onClick={() => setView('contact')}>Contact Inbox</li>
          <li className={view === 'newsletter' ? 'active' : ''} onClick={() => setView('newsletter')}>Newsletter</li>
          <li className={view === 'ai' ? 'active' : ''} onClick={() => setView('ai')}>AI Knowledge</li>
        </ul>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </aside>
      <main className="admin-main">
        {view === 'projects' && <ProjectsAdmin />}
        {view === 'blog' && <BlogAdmin />}
        {view === 'contact' && <div>Contact Inbox (Coming Soon)</div>}
        {view === 'newsletter' && <div>Newsletter (Coming Soon)</div>}
        {view === 'ai' && <div>AI Knowledge (Coming Soon)</div>}
      </main>
    </div>
  );
}

export default AdminApp;
