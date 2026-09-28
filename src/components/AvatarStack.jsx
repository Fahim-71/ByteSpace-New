import "./AvatarStack.css";

// A row of overlapping round avatars with a count bubble at the end ("26+").
// size: "small" (32px) or "large" (43px)
// countStyle: "lime" | "dark" | "black"
export default function AvatarStack({ avatars, count, size = "small", countStyle = "lime" }) {
  return (
    <div className={`avatars avatars--${size}`}>
      {avatars.map((src) => (
        <img key={src} src={src} alt="" className="avatars__img" loading="lazy" />
      ))}
      <span className={`avatars__count avatars__count--${countStyle}`}>{count}</span>
    </div>
  );
}
