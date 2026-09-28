// Simple form validation helpers.
// Each "validate" function returns an error message, or "" when the value is OK.

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validateEmail(value) {
  if (!value.trim()) return "Email is required.";
  if (!isValidEmail(value)) return "Enter a valid email address.";
  return "";
}

export function validatePassword(value) {
  if (!value) return "Password is required.";
  if (value.length < 8) return "Password must be at least 8 characters.";
  return "";
}

export function validateName(value) {
  if (!value.trim()) return "Full name is required.";
  if (value.trim().length < 2) return "Enter your full name.";
  return "";
}
