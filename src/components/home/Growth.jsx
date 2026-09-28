import CourseCard from "../CourseCard";
import Shape from "../Shape";
import { CheckCircleIcon } from "../Icons";
import { ProgressCard, RevenueCard, StudentsCard, YearCard } from "../StatCards";
import { courses } from "../../data/courses";
import { creatorPerks, stats } from "../../data/content";
import "./Growth.css";

export default function Growth() {
  return (
    <section id="creators" className="growth" aria-labelledby="growth-title">
      {/* soft colour blobs in the background (positions from Figma) */}
      <div className="decor">
        <div className="glow glow--lime" style={{ left: -152, top: -466, width: 1137, height: 1137, opacity: 0.4 }} />
        <div className="glow glow--blue" style={{ left: 811, top: -458, width: 1137, height: 1137, opacity: 0.08 }} />
        <div className="glow glow--blue" style={{ left: -508, top: 183, width: 1137, height: 1137, opacity: 0.16 }} />
        <div className="glow glow--blue" style={{ left: 722, top: 788, width: 1137, height: 1137, opacity: 0.24 }} />
        <div className="glow glow--lime" style={{ left: -287, top: 946, width: 672, height: 672, opacity: 0.6 }} />
      </div>

      <div className="container growth__inner">
        {/* ----- Row 1: learners ----- */}
        <div className="growth__row">
          <div className="growth__text">
            <h2 id="growth-title" className="heading-lg">Your Path to Professional Growth Starts Here!</h2>
            <p className="text-lead growth__lead">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="growth__stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="collage collage--learners" aria-hidden="true">
            <div className="collage__stage">
              <CourseCard course={courses[0]} decorative className="collage__card" />
              <img className="collage__photo collage__photo--student" src="/images/hero-student.webp" alt="" loading="lazy" />
              <ProgressCard className="collage__progress" />
              <Shape name="spring-lime" x={404} y={67} size={216} />
            </div>
          </div>
        </div>

        {/* ----- Row 2: creators ----- */}
        <div className="growth__row growth__row--reverse">
          <div className="collage collage--creators" aria-hidden="true">
            <div className="collage__stage">
              <RevenueCard className="collage__revenue" />
              <YearCard className="collage__year" />
              <div className="collage__photo collage__photo--creator">
                <img src="/images/creator.webp" alt="" loading="lazy" />
              </div>
              <StudentsCard className="collage__students" />
              <Shape name="squiggle-lime" x={303} y={114} size={216} />
            </div>
          </div>

          <div className="growth__text growth__text--creators">
            <h2 className="heading-lg growth__title-narrow">Create &amp; Manage Courses Easily.</h2>
            <p className="text-lead growth__lead">
              <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="growth__perks">
              {creatorPerks.map((perk) => (
                <li key={perk}>
                  <CheckCircleIcon />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
