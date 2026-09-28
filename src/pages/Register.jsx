import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import { validateEmail, validateName, validatePassword } from "../utils/validation";
import "../components/auth/Form.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((message) => message !== "");
    if (hasErrors) return;

    // No backend – fake a short request
    setStatus("loading");
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <AuthLayout
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="auth-content">
        <div>
          <div className="auth-heading">
            <p className="auth-heading__label">Create an Account</p>
            <h2>
              Welcome to
              <br />
              ByteSpace
            </h2>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <FormInput
              id="name"
              name="name"
              label="Full Name"
              placeholder="Jamie Davis"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
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
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
            />

            <div className="auth-form__footer">
              <p className="auth-form__success" role="status">
                {status === "success" && "Account created – welcome aboard!"}
              </p>
              <button type="submit" className="btn" disabled={status === "loading"}>
                {status === "loading" ? "Creating account…" : "Continue"}
              </button>
            </div>
          </form>
        </div>

        <p className="auth-switch auth-switch--dark">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
}
