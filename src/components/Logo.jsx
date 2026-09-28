import { Link } from "react-router-dom";
import { LogoMark } from "./Icons";
import "./Logo.css";

// light = white text (on blue backgrounds), dark = dark text (on white)
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="ByteSpace home">
      <LogoMark className="logo__mark" />
      <span className="logo__text">ByteSpace</span>
    </Link>
  );
}
