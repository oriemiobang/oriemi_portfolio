import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const templateId = 'template_2qsl1j5';
  const serviceId = 'service_16pyqn6';
  const publicKey = 'Rlp-utlbJ7t9SebJ_';

  function sendEmail(event) {
    event.preventDefault();
    setIsSending(true);

    const formData = new FormData(event.target);
    const paramsObj = {
      username: formData.get('username'),
      email: formData.get('email'),
      message: formData.get('message'),
      subject: formData.get('subject'),
      phone: formData.get('phone')
    };

    emailjs.send(serviceId, templateId, paramsObj, publicKey)
      .then((response) => {
        if (formRef.current) {
          formRef.current.reset();
        }
        alert("Email sent successfully!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Couldn't send email. Check your network connection.");
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <div id="contact" className="contact-content">
      <svg className="contour-bg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,60 C 120,20 240,110 400,60 S 560,10 620,55" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.35"/>
        <path d="M-20,105 C 130,65 260,150 420,105 S 570,55 620,100" fill="none" stroke="#4aa79b" strokeWidth="1.1" opacity="0.25"/>
        <path d="M-20,150 C 140,110 270,190 430,150 S 580,95 620,140" fill="none" stroke="#d6a85c" strokeWidth="1.1" opacity="0.28"/>
      </svg>

      <span className="eyebrow">Let's talk</span>
      <h2 className="section-title">Contact</h2>
      <div className="rule"></div>

      <p className="bio">
        Have a <strong>project, role, or idea</strong> you'd like to talk through? Send a message with
        a bit of context and I'll get back to you personally, usually within a day or two.
      </p>

      {/* ================= CONTACT GRID ================= */}
      <div className="contact-grid">

        {/* LEFT: info */}
        <div>
          <div className="info-card">

            <div className="info-row teal">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span className="label">Location</span>
                <h4>Gambella, Ethiopia</h4>
                <p>Available for remote work worldwide</p>
              </div>
            </div>

            <div className="info-row gold">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>
              </div>
              <div>
                <span className="label">Email</span>
                <h4><a href="mailto:oriemiobango@gmail.com">oriemiobango@gmail.com</a></h4>
                <p>Best for detailed project inquiries</p>
              </div>
            </div>

            <div className="info-row navy">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.68 2.89a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.19-1.19a2 2 0 0 1 2.11-.45c.93.32 1.9.55 2.89.68A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span className="label">Phone</span>
                <h4>+251928752557</h4>
                <p>By appointment only</p>
              </div>
            </div>

            <div className="avail-strip">
              <span className="avail-dot"></span>
              <span>Currently open for new projects
                <small>Response time: within 24–48 hours</small>
              </span>
            </div>
          </div>

          <div className="social-card">
            <span className="label">Find me online</span>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
              <a href="#" aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 2.7 11.7c-1.2.5-1.2 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.4.9.9.9.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8L23 5.5c.3-1.2-.4-1.7-1.1-1.2z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M3.28 8.5h3.66V21H3.28zM9.36 8.5h3.5v1.7h.05c.49-.92 1.68-1.9 3.46-1.9 3.7 0 4.38 2.44 4.38 5.6V21h-3.66v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V21H9.36z"/></svg></a>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="form-card">
          <h3 className="form-heading">Send a message</h3>
          <p className="form-sub">Fill in the details below and I'll respond as soon as I can.</p>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="username">Your Name</label>
                <input type="text" id="username" name="username" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="jane@email.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+251 928 752 557" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project inquiry" required />
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me a bit about what you're building..." required></textarea>
              </div>
            </div>

            <div className="form-footer">
              <p className="note">By sending this message you agree to be contacted back at the email or number provided.</p>
              <button type="submit" className="btn-primary" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* ================= QUICK FACTS ================= */}
      <div className="process-strip">
        <div className="process-cell">
          <span className="p-num">Availability</span>
          <h5>Open to work</h5>
          <p>Accepting new freelance and full-time opportunities.</p>
        </div>
        <div className="process-cell">
          <span className="p-num">Response Time</span>
          <h5>24–48 hours</h5>
          <p>I read every message and reply as quickly as I can.</p>
        </div>
        <div className="process-cell">
          <span className="p-num">Preferred Contact</span>
          <h5>Email first</h5>
          <p>Best for sharing project details, files, and links.</p>
        </div>
        <div className="process-cell">
          <span className="p-num">Time Zone</span>
          <h5>EAT (UTC+3)</h5>
          <p>Based in Gambella, Ethiopia — happy to work across zones.</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;