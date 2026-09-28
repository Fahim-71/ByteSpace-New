import { useState } from "react";
import Logo from "./Logo";
import { footerColumns } from "../data/content";
import { isValidEmail } from "../utils/validation";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null); // { type: "error" | "success", text }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setMessage({ type: "success", text: "Thanks! You're subscribed." });
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__about">
            <Logo />
            <p className="footer__tagline">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="newsletter" onSubmit={handleSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage(null);
                }}
                aria-invalid={message?.type === "error"}
                aria-describedby="newsletter-message"
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
            <p id="newsletter-message" className={`newsletter__message is-${message?.type}`} aria-live="polite">
              {message?.text}
            </p>
            <p className="footer__small">
              By subscribing, you agree to our <a href="#">Privacy Policy</a> and consent to receive updates from our
              company.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {footerColumns.map((column, index) => (
              <div key={index} className="footer__column">
                {/* the middle column has no title, so we keep an empty line to align the links */}
                <h2 className="footer__heading">{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies Settings</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
