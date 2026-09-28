import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function NotFound() {
  return (
    <main className="blueprint" style={{ minHeight: "100vh", color: "var(--gray-50)" }}>
      <div className="container" style={{ paddingTop: 40, textAlign: "center" }}>
        <Logo light />
        <h1 style={{ marginTop: 120, fontFamily: "var(--font-heading)", fontSize: 120, color: "var(--lime)" }}>404</h1>
        <p className="text-lead" style={{ margin: "16px 0 32px" }}>
          The page you are looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </main>
  );
}
