import { FacebookIcon, GoogleIcon } from "../Icons";

export default function SocialButtons() {
  return (
    <div className="social">
      <p className="social__divider">or</p>
      <div className="social__buttons">
        <button type="button" aria-label="Continue with Facebook">
          <FacebookIcon />
        </button>
        <button type="button" aria-label="Continue with Google">
          <GoogleIcon />
        </button>
      </div>
    </div>
  );
}
