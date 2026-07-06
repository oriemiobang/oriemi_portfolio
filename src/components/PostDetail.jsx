import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { api } from '../services/api';
import './PostDetail.css';

function PostDetail({ slug, onBack }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      api.getBlogPost(slug)
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div className="post-detail-content" style={{ padding: '40px' }}>Loading...</div>;
  }

  if (!post) {
    return (
      <div className="post-detail-content" style={{ padding: '40px' }}>
        <div onClick={onBack} className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Blog
        </div>
        <h2>Post not found</h2>
      </div>
    );
  }

  return (
    <div className="post-detail-content">
      <svg className="contour-bg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35"/>
        <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25"/>
        <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28"/>
      </svg>

      <div onClick={onBack} className="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Blog
      </div>

      <div className="article-max">
        <span className="eyebrow">{post.category}</span>
        <h1 className="article-title">{post.title}</h1>

        <div className="article-meta">
          <div className="author-chip">
            <svg viewBox="0 0 80 80" role="img" aria-label="Oriemi Obang">
              <rect width="80" height="80" fill="var(--navy)"/>
              <circle cx="40" cy="32" r="15" fill="var(--card)"/>
              <path d="M14,75 C14,54 26,45 40,45 C54,45 66,54 66,75 Z" fill="var(--card)"/>
              <text x="40" y="36" fontFamily="Fraunces, serif" fontSize="13" fontWeight="600" fill="var(--gold)" textAnchor="middle">OO</text>
            </svg>
            <div>
              <span className="a-name">Oriemi Obang</span>
              <span className="a-role">Full-Stack Developer</span>
            </div>
          </div>
          <span className="meta-sep"></span>
          <div className="meta-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="meta-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {post.readTime || '5 min read'}
          </div>
        </div>

        {post.thumbUrl && (
          <div className="featured-image">
             <img src={post.thumbUrl} alt={post.title} style={{ width: '100%', height: 'auto', borderRadius: '14px' }} />
          </div>
        )}

        <div className="article-body" style={{ color: 'var(--text-body)' }}>
           <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="tag-row">
            {post.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        )}

        <div className="author-card">
          <svg viewBox="0 0 120 120" role="img" aria-label="Oriemi Obang">
            <rect width="120" height="120" fill="var(--navy)"/>
            <circle cx="60" cy="48" r="22" fill="var(--card)"/>
            <path d="M20,112 C20,80 38,68 60,68 C82,68 100,80 100,112 Z" fill="var(--card)"/>
            <text x="60" y="54" fontFamily="Fraunces, serif" fontSize="20" fontWeight="600" fill="var(--gold)" textAnchor="middle">OO</text>
          </svg>
          <div>
            <h5>Written by Oriemi Obang</h5>
            <p>Full-stack developer building mobile, web, and desktop products with Flutter, Next.js, and NestJS. Based in Gambella, Ethiopia — available for remote work worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
