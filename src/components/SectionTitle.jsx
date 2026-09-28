import "./SectionTitle.css";

// Centered section heading with a paragraph under it.
// size: "large" (44px) or "medium" (36px)
export default function SectionTitle({ id, title, text, size = "large" }) {
  return (
    <div className="section-title">
      <h2 id={id} className={size === "large" ? "heading-lg section-title__narrow" : "heading-md"}>
        {title}
      </h2>
      <p className="text-lead">{text}</p>
    </div>
  );
}
