import { Link } from "react-router-dom";
import Shape from "../Shape";
import { ctaShapes } from "../../data/content";
import "./CreatorCta.css";

export default function CreatorCta() {
  return (
    <section className="cta blueprint" aria-labelledby="cta-title">
      <div className="decor cta__decor">
        {ctaShapes.map((shape) => (
          <Shape key={shape.name + shape.x} {...shape} />
        ))}
      </div>

      <div className="container cta__content">
        <h2 id="cta-title" className="cta__title">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-lead">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link to="/register" className="btn">Join as Creator</Link>
      </div>
    </section>
  );
}
