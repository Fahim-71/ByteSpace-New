// One decorative 3D shape (image), positioned with the x / y values from Figma.
export default function Shape({ name, x, y, size, flip = false }) {
  return (
    <img
      src={`/images/shapes/${name}.webp`}
      alt=""
      aria-hidden="true"
      className={`shape ${flip ? "shape--flip" : ""}`}
      style={{ left: x, top: y, width: size, height: size }}
      loading="lazy"
      draggable="false"
    />
  );
}
