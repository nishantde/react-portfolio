import { useState } from 'react'
import { MAKE_HOOK, contact } from '../data/contact'
import HeroStagger from '../components/HeroStagger.jsx'

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3.5h3.2l1.2 3.2-2 1.5a12 12 0 0 0 5.4 5.4l1.5-2 3.2 1.2V17a2 2 0 0 1-2.2 2A15 15 0 0 1 5 6.2 2 2 0 0 1 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  async function onSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(MAKE_HOOK, {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ firstName, lastName, email, message }),
      })
      if (!res.ok) throw new Error('Request failed')
      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <article>
      <header className="wrap contact-hero">
        <HeroStagger>
          <h1>{contact.title}</h1>
          <p className="contact-kicker">{contact.kicker}</p>
          <p className="contact-lede">{contact.lede}</p>
        </HeroStagger>
      </header>

      <div className="wrap contact-layout">
        {status === 'sent' ? (
          <div className="contact-form contact-success">
            <h2>Form submitted.</h2>
            <p>Thanks! I'll get back to you within 24 hours.</p>
            <button type="button" onClick={() => setStatus('idle')}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-name-row">
              <label>
                First Name*
                <input
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label>
                Last Name
                <input
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <label>
              Email Address*
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Message*
              <textarea
                name="message"
                placeholder="Tell me about your project, goals, and timeline..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            {status === 'error' ? (
              <p className="contact-error">
                Something went wrong. Try again, or email me directly.
              </p>
            ) : null}
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}

        <aside className="contact-aside">
          <h2>Direct Info</h2>
          <ul>
            <li>
              <span className="about-icon"><IconMail /></span>
              <div>
                <p className="cs-kicker">Email</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="about-icon"><IconPhone /></span>
              <div>
                <p className="cs-kicker">Phone</p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
            </li>
            <li>
              <span className="about-icon"><IconPin /></span>
              <div>
                <p className="cs-kicker">Location</p>
                <p>{contact.location}</p>
              </div>
            </li>
          </ul>
          <p className="contact-note">{contact.note}</p>
        </aside>
      </div>
    </article>
  )
}