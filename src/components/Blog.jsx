import React, { useState, useEffect } from 'react';
import './Blog.css';
import { api } from '../services/api';

function Blog({ onOpenPost }) {
  const [activeTab, setActiveTab] = useState('All Posts');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getBlogPosts().then(data => {
      setBlogPosts(data.data || []);
      setLoading(false);
    }).catch(console.error);
  }, []);

  const tabs = ['All Posts', 'Projects', 'Tutorial', 'Video', 'Life & Notes'];

  const featuredPost = blogPosts.find(p => p.isFeatured);
  const gridPosts = blogPosts.filter(p => !p.isFeatured);

  const displayedPosts = activeTab === 'All Posts' 
    ? gridPosts 
    : gridPosts.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div id="blog" className="blog-content">
      <svg className="contour-bg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35"/>
        <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25"/>
        <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28"/>
      </svg>

      <span className="eyebrow">Notes &amp; updates</span>
      <h2 className="section-title">Blog</h2>
      <div className="rule"></div>

      <p className="bio">
        Where I write up <strong>what I'm building</strong>, lessons learned along the way, and the
        occasional behind-the-scenes look at a project — in text, photos, and video.
      </p>

      {/* ================= FILTERS ================= */}
      <div className="filter-row">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* ================= FEATURED POST ================= */}
      {featuredPost && (
        <div className="featured-post">
          <div className="fp-media" style={{ backgroundImage: `url('${featuredPost.thumbUrl}')` }}>
            <span className="badge">Featured</span>
          </div>
          <div className="fp-body">
            <div className="fp-meta">
              <span>{featuredPost.category.toUpperCase()}</span>
              <span className="dot-sep"></span>
              <span>{featuredPost.date}</span>
              <span className="dot-sep"></span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.excerpt}</p>
            <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); onOpenPost(featuredPost.slug); }}>
              Read the full post
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      )}

      {/* ================= BLOG GRID ================= */}
      <div className="blog-grid">
        {displayedPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className={`blog-thumb ${post.thumbClass}`} style={{ backgroundImage: `url('${post.thumbUrl}')` }}>
              <span className="category-pill">{post.category}</span>
              {post.hasVideoOverlay && (
                <div className="play-overlay"><div className="play-btn"><svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20"/></svg></div></div>
              )}
            </div>
            <div className="blog-card-body">
              <div className="blog-meta"><span>{post.date}</span><span className="dot-sep"></span><span>{post.readTime}</span></div>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); onOpenPost(post.slug); }}>
                {post.hasVideoOverlay ? 'Watch video' : 'Read post'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ================= NEWSLETTER CTA ================= */}
      <div className="cta-card">
        <div className="cta-text">
          <div className="eyebrow">Stay in the loop</div>
          <h3>Get new posts in your inbox</h3>
          <p>No spam — just new projects, tutorials, and the occasional video, sent whenever I actually publish something.</p>
        </div>
        <form className="cta-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); e.target.reset(); }}>
          <input type="email" placeholder="you@email.com" required />
          <button type="submit" className="btn-primary">
            Subscribe
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </div>

    </div>
  );
}

export default Blog;
