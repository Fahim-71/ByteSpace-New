import SectionTitle from "../SectionTitle";
import { learningPaths } from "../../data/content";
import "./LearningPaths.css";

export default function LearningPaths() {
  return (
    <section id="categories" className="paths" aria-labelledby="paths-title">
      <div className="container">
        <SectionTitle
          id="paths-title"
          size="medium"
          title="Explore Diverse Learning Paths at Bytespace"
          text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="paths__grid">
          {learningPaths.map((path) => {
            const Icon = path.Icon; // component names must start with a capital letter
            return (
              <li key={path.label}>
                <a href="#courses" className="paths__card">
                  <span className="paths__icon">
                    <Icon />
                  </span>
                  <span className="paths__label">{path.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
