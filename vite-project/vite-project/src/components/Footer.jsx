import React, { useState } from "react";
import "./Footer.css";

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const perks = [
  {
    title: "Free delivery",
    text: "On orders above ₹499",
    icon: (
      <Icon>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
       
      </Icon>
    ),
  },
  {
    title: "7-day returns",
    text: "No questions asked",
    icon: (
      <Icon>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </Icon>
    ),
  },
  {
    title: "Secure payments",
    text: "UPI, cards, net banking & COD",
    icon: (
      <Icon>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    ),
  },
  {
    title: "Help when you need it",
    text: "Chat or call, 7 days a week",
    icon: (
      <Icon>
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </Icon>
    ),
  },
];

const columns = [
  {
    heading: "Get to know us",
    links: [
      ["About us", "#about"],
      ["Careers", "#careers"],
      ["Press releases", "#press"],
      ["shopNest Science", "#science"],
    ],
  },
  {
    heading: "Sell on shopNest",
    links: [
      ["Start selling", "#sell"],
      ["Protect & build your brand", "#brand"],
      ["Become an affiliate", "#affiliate"],
      ["Fulfilled by shopNest", "#fulfillment"],
    ],
  },
  {
    heading: "Let us help you",
    links: [
      ["Your account", "#account"],
      ["Returns centre", "#returns"],
      ["Recalls & safety alerts", "#recall"],
      ["Help", "#help"],
    ],
  },
];

const socials = [
  {
    name: "Facebook",
    href: "#facebook",
    icon: (
      <Icon>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </Icon>
    ),
  },
  {
    name: "Twitter",
    href: "#twitter",
    icon: (
      <Icon>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </Icon>
    ),
  },
  {
    name: "Instagram",
    href: "#instagram",
    icon: (
      <Icon>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </Icon>
    ),
  },
  {
    name: "YouTube",
    href: "#youtube",
    icon: (
      <Icon>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </Icon>
    ),
  },
];

const payments = ["UPI", "Visa", "Mastercard", "RuPay", "Net banking", "Cash on delivery"];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your newsletter API here
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="sn-footer">
      {/* Back to top */}
      <button type="button" className="sn-top" onClick={scrollToTop}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 15-6-6-6 6" />
        </svg>
        Back to top
      </button>

      {/* Perks strip */}
      <section className="sn-perks" aria-label="Why shop with us">
        <ul className="sn-perks__grid">
          {perks.map((p) => (
            <li key={p.title} className="sn-perk">
              <span className="sn-perk__icon">{p.icon}</span>
              <span>
                <strong>{p.title}</strong>
                <small>{p.text}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main footer */}
      <div className="sn-main">
        <div className="sn-main__inner">
          <div className="sn-brand">
            <a href="/" className="sn-logo" aria-label="shopNest home">
              shop<span>Nest</span>
            </a>
            <p className="sn-brand__text">
              Everyday essentials and little luxuries, delivered to your door.
            </p>

            <form className="sn-news" onSubmit={handleSubscribe}>
              <label htmlFor="sn-email">Get deals in your inbox</label>
              {subscribed ? (
                <p className="sn-news__done" role="status">
                  You're subscribed. Watch your inbox for offers.
                </p>
              ) : (
                <div className="sn-news__row">
                  <input
                    id="sn-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
              )}
            </form>

            <div className="sn-social">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} className="sn-col" aria-label={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="sn-bottom">
        <div className="sn-bottom__inner">
          <ul className="sn-pay" aria-label="Accepted payment methods">
            {payments.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <div className="sn-legal">
            <a href="#conditions">Conditions of use & sale</a>
            <a href="#privacy">Privacy notice</a>
            <a href="#interest-ads">Interest-based ads</a>
          </div>

          <p className="sn-copy">© 1996–2026 shopNest.in, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;