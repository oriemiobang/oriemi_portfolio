import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('adminToken');

  const fetchProjects = () => {
    fetch(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      }).then(() => fetchProjects());
    }
  };

  return (
    <div>
      <h2>Manage Projects</h2>
      {loading ? <p>Loading...</p> : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{new Date(p.projectDate || p.createdAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)} className="btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProjectsAdmin;
