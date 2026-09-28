import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ShoppingBagIcon } from "./Icons";
import { navLinks } from "../data/content";
import "./Header.css";

export default function Header() {
  // controls the mobile menu (only visible on small screens)
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo light />

        <nav className="header__nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className={link.href === "/" ? "is-active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/login" className="header__auth-link">Sign In</Link>
          <Link to="/register" className="header__auth-link">Join Us</Link>
          <a href="#" aria-label="Cart">
            <ShoppingBagIcon className="header__cart" />
          </a>
          <button
            type="button"
            className={`header__burger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <div className="container">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={closeMenu} className="mobile-menu__link">
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu__buttons">
              <Link to="/login" onClick={closeMenu} className="mobile-menu__outline">Sign In</Link>
              <Link to="/register" onClick={closeMenu} className="btn">Join Us</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
