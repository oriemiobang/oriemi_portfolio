import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

const knowledge = [
  { keys: ['skill','stack','tech','technology','flutter','next','nest'],
    reply: "Oriemi works mainly in Flutter for mobile and desktop apps, and a Next.js + NestJS stack for full-stack web projects — plus TypeScript, PostgreSQL, and Firebase depending on the project." },
  { keys: ['project','portfolio','built','work you','app'],
    reply: "He's shipped mobile apps, full-stack web platforms, and cross-platform desktop tools. Check the Portfolio page for case studies, or ask me about a specific type of project." },
  { keys: ['available','hire','freelance','work with','open to'],
    reply: "Yes — Oriemi is currently open to new freelance and full-time opportunities. Response time is usually within 24–48 hours." },
  { keys: ['contact','reach','email','phone','get in touch'],
    reply: "The fastest way is email at oriemiobango@gmail.com, or use the form on the Contact page for project inquiries." },
  { keys: ['location','based','where','ethiopia','gambella'],
    reply: "Oriemi is based in Gambella, Ethiopia, and works remotely with clients worldwide." },
  { keys: ['experience','background','years','about'],
    reply: "He's a full-stack developer with hands-on experience across mobile, web, and desktop — see the About and Resume pages for the full story." }
];

function getReply(text){
  const t = text.toLowerCase();
  for(const item of knowledge){
    if(item.keys.some(k => t.includes(k))) return item.reply;
  }
  return "That's a great question — I don't have a canned answer for that yet, but you can reach Oriemi directly through the Contact page and he'll follow up personally.";
}

function AIAssistant() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm Oriemi's AI assistant. Ask me about his skills, projects, experience, or how to get in touch — I'll do my best to help." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text) => {
    if(!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    
    // Simulate thinking and then bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: getReply(text) }]);
    }, 500);
  };

  return (
    <div id="ai-assistant" className="ai-content">
      <svg className="contour-bg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35"/>
        <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25"/>
        <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28"/>
      </svg>

      <span className="eyebrow">Ask about me</span>
      <h2 className="section-title">AI Assistant</h2>
      <div className="rule"></div>

      <p className="bio">
        Curious about my <strong>background, skills, or availability</strong>? Ask my assistant directly —
        it's trained on my resume, portfolio, and services, and can answer most questions instantly, day or night.
      </p>

      {/* ================= AI GRID ================= */}
      <div className="ai-grid">

        {/* Chat panel */}
        <div className="chat-card">
          <div className="chat-header">
            <div className="chat-avatar"><div className="fill"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg></div></div>
            <div className="chat-header-text">
              <h4>Ask Oriemi's Assistant</h4>
              <div className="status"><span className="status-dot"></span>Online — usually replies instantly</div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.sender}`}>
                <div className="msg-avatar">
                  {msg.sender === 'bot' ? (
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  )}
                </div>
                <div className="msg-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chip-row">
            <span className="chip" onClick={() => handleSend("What are your skills?")}>What are your skills?</span>
            <span className="chip" onClick={() => handleSend("Tell me about your projects")}>Tell me about your projects</span>
            <span className="chip" onClick={() => handleSend("Are you available for freelance work?")}>Are you available for work?</span>
            <span className="chip" onClick={() => handleSend("How can I contact you?")}>How can I contact you?</span>
          </div>

          <div className="chat-input-row">
            <input 
              type="text" 
              placeholder="Type a question about Oriemi..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(inputValue) }}
            />
            <button className="send-btn" aria-label="Send" onClick={() => handleSend(inputValue)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>

        {/* Info panel */}
        <div>
          <div className="info-card">
            <div className="badge-row"><span className="label">What it can help with</span></div>

            <div className="capability-row teal">
              <div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
              <div>
                <h5>Skills &amp; stack</h5>
                <p>Flutter, Next.js, NestJS, and everything else listed on the Skills page.</p>
              </div>
            </div>

            <div className="capability-row gold">
              <div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
              <div>
                <h5>Projects &amp; portfolio</h5>
                <p>Details on past work, the problems solved, and the tools used for each.</p>
              </div>
            </div>

            <div className="capability-row navy">
              <div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg></div>
              <div>
                <h5>Availability &amp; hiring</h5>
                <p>Current openness to freelance, contract, or full-time roles.</p>
              </div>
            </div>

            <div className="capability-row teal">
              <div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></div>
              <div>
                <h5>Getting in touch</h5>
                <p>Points people to the right contact method for their kind of inquiry.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="badge-row"><span className="label">About this assistant</span></div>
            <div className="disclaimer">
              This assistant is grounded in <strong>Oriemi's resume, portfolio, and service details</strong> —
              it won't make up experience he doesn't have. For anything it can't answer, it will point you
              to the <strong>Contact</strong> page so you can reach him directly.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AIAssistant;
