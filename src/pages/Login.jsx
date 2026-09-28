import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import SocialButtons from "../components/auth/SocialButtons";
import { validateEmail, validatePassword } from "../utils/validation";
import "../components/auth/Form.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"

  // One change handler for all inputs – uses the input's "name"
  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((message) => message !== "");
    if (hasErrors) return;

    // There is no backend in this project, so we just fake a short request.
    setStatus("loading");
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <AuthLayout
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="auth-content">
        <div>
          <div className="auth-heading">
            <p className="auth-heading__label">Sign In</p>
            <h2>Welcome Back</h2>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <FormInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="designer@example.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormInput
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="********"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
            />

            <div className="auth-form__footer">
              <p className="auth-form__success" role="status">
                {status === "success" && "Signed in successfully."}
              </p>
              <button type="submit" className="btn" disabled={status === "loading"}>
                {status === "loading" ? "Signing in…" : "Sign In"}
              </button>
            </div>
          </form>
        </div>

        <SocialButtons />

        <p className="auth-switch">
          New user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </AuthLayout>
  );
}
