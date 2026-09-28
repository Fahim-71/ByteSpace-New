import { useState } from "react";
import "./Form.css";

// Label + input + error message. Password inputs get a Show/Hide button.
export default function FormInput({ id, label, type = "text", error, ...inputProps }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>

      <div className="form-field__wrap">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          className={`${error ? "has-error" : ""} ${isPassword ? "with-toggle" : ""}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          {...inputProps}
        />

        {isPassword && (
          <button
            type="button"
            className="form-field__toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="form-field__error">
          {error}
        </p>
      )}
    </div>
  );
}
