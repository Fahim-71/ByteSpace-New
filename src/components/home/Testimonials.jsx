import { testimonials } from "../../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="decor">
        <div className="glow glow--lime" style={{ left: 842, top: -241, width: 1137, height: 1137, opacity: 0.4 }} />
        <div className="glow glow--lime" style={{ left: 395, top: -138, width: 672, height: 672, opacity: 0.6 }} />
        <div className="glow glow--blue" style={{ left: -442, top: 149, width: 1137, height: 1137, opacity: 0.24 }} />
      </div>

      <div className="container">
        <div className="testimonials__header">
          <h2 id="testimonials-title" className="heading-lg">Discover What Our Community Is Saying</h2>
          <p className="text-lead">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="testimonials__grid">
          {testimonials.map((item) => (
            <li key={item.name}>
              <figure className="testimonial">
                <img src={item.avatar} alt="" className="testimonial__avatar" loading="lazy" />
                <figcaption>
                  <p className="testimonial__name">{item.name}</p>
                  <p className="testimonial__role">{item.role}</p>
                </figcaption>
                <blockquote className="text-lead">&ldquo;{item.quote}&rdquo;</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
