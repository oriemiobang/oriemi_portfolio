const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
  // Projects
  getProjects: async (category) => {
    const query = category && category !== 'all' ? `?category=${category}&visible=true` : '?visible=true';
    const res = await fetch(`${API_URL}/projects${query}`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  },

  // Blog
  getBlogPosts: async (page = 1) => {
    const res = await fetch(`${API_URL}/blog?page=${page}`);
    if (!res.ok) throw new Error('Failed to fetch blog posts');
    return res.json();
  },
  
  getBlogPost: async (slug) => {
    const res = await fetch(`${API_URL}/blog/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch blog post');
    return res.json();
  },

  // Contact
  sendMessage: async (data) => {
    const res = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to send message');
    return res.json();
  },

  // Newsletter
  subscribeNewsletter: async (email) => {
    const res = await fetch(`${API_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error('Failed to subscribe');
    return res.json();
  },

  // AI Chat
  chat: async (message, sessionId) => {
    const res = await fetch(`${API_URL}/ai/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sessionId }),
    });
    if (!res.ok) throw new Error('Failed to send chat');
    return res.json();
  }
};
