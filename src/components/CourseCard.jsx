import { SignalIcon, StarIcon } from "./Icons";
import AvatarStack from "./AvatarStack";
import { courseDefaults, learnerAvatars } from "../data/courses";
import "./CourseCard.css";

// Card showing one course.
// "decorative" is used when the card is only part of an image collage
// (hero / login page): slightly different colours and no hover effect.
export default function CourseCard({ course, decorative = false, className = "", style }) {
  const { lessons, duration, comments, rating, level, price, enrolled } = courseDefaults;

  return (
    <article className={`course-card ${decorative ? "course-card--decorative" : ""} ${className}`} style={style}>
      <div className="course-card__image">
        <img src={course.image} alt="" loading="lazy" />
        <ul className="course-card__meta">
          <li>{lessons} Lessons</li>
          <li>{duration}</li>
          <li>{comments} Comments</li>
        </ul>
      </div>

      <div className="course-card__body">
        <div className="course-card__top">
          <div>
            <h3 className="course-card__title">{course.title}</h3>
            <p className="course-card__creator">
              by <span>{course.creator}</span>
            </p>
          </div>
          <p className="course-card__rating">
            <span className="sr-only">Rated</span>
            {rating}
            <StarIcon className="course-card__star" />
          </p>
        </div>

        <div className="course-card__row">
          <span className="course-card__level">
            <SignalIcon />
            {level}
          </span>
          <AvatarStack avatars={learnerAvatars} count={enrolled} countStyle={decorative ? "black" : "lime"} />
        </div>

        <p className="course-card__price">
          <strong>${price}</strong>/lifetime
        </p>
      </div>
    </article>
  );
}
