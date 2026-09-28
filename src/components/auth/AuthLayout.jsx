import Logo from "../Logo";
import Shape from "../Shape";
import CourseCard from "../CourseCard";
import { StudentsCard } from "../StatCards";
import { courses } from "../../data/courses";
import "./AuthLayout.css";

// Shared layout for the Login and Register pages:
// blue background, text + picture collage on the left, white form panel on the right.
export default function AuthLayout({ title, text, children }) {
  return (
    <div className="auth blueprint">
      <div className="container auth__container">
        <header className="auth__header">
          <Logo light />
        </header>

        <div className="auth__body">
          <div className="auth__intro">
            <h1 className="auth__title">{title}</h1>
            <p className="text-lead">{text}</p>

            {/* collage – only shown on large screens */}
            <div className="auth__collage" aria-hidden="true">
              <CourseCard course={courses[1]} decorative className="auth__card auth__card--back" />
              <CourseCard course={courses[2]} decorative className="auth__card auth__card--front" />
              <StudentsCard lime className="auth__students" />
              <Shape name="torus-lime" x={54} y={15} size={147} />
              <Shape name="pyramid-lime" x={0} y={397} size={189} />
              <Shape name="squiggle-white" x={376} y={321} size={176} flip />
            </div>
          </div>

          <main className="auth__panel">{children}</main>
        </div>
      </div>
    </div>
  );
}
