import { useState } from "react";
import CourseCard from "../CourseCard";
import SectionTitle from "../SectionTitle";
import { courses, topicRows } from "../../data/courses";
import "./FeaturedCourses.css";

// search: text from the hero search bar ("" = no search)
export default function FeaturedCourses({ search, onClearSearch }) {
  const [activeTopic, setActiveTopic] = useState("Featured");

  // Keep the courses that match the selected topic AND the search text
  const visibleCourses = courses.filter((course) => {
    const matchesTopic = activeTopic === "Featured" || course.categories.includes(activeTopic);

    const searchText = search.toLowerCase();
    const matchesSearch =
      searchText === "" ||
      course.title.toLowerCase().includes(searchText) ||
      course.creator.toLowerCase().includes(searchText) ||
      course.categories.some((category) => category.toLowerCase().includes(searchText));

    return matchesTopic && matchesSearch;
  });

  return (
    <section id="courses" className="courses" aria-labelledby="courses-title">
      <div className="container">
        <SectionTitle
          id="courses-title"
          title="Discover Your Passion, Build Your Skills"
          text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="topics" role="group" aria-label="Filter courses by topic">
          {topicRows.map((row, rowIndex) => (
            <div key={rowIndex} className="topics__row">
              {row.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className={`topics__chip ${topic === activeTopic ? "is-active" : ""}`}
                  aria-pressed={topic === activeTopic}
                  onClick={() => setActiveTopic(topic)}
                >
                  {topic}
                </button>
              ))}
              {rowIndex === topicRows.length - 1 && (
                <a href="#categories" className="topics__more">+ More</a>
              )}
            </div>
          ))}
        </div>

        {search && (
          <p className="courses__search-info" aria-live="polite">
            Showing results for <strong>“{search}”</strong> ·{" "}
            <button type="button" onClick={onClearSearch}>Clear search</button>
          </p>
        )}

        {visibleCourses.length > 0 ? (
          <ul className="courses__grid">
            {visibleCourses.map((course) => (
              <li key={course.id}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="courses__empty">
            <p className="courses__empty-title">No courses found</p>
            <p>New courses are on the way. Try another topic or search term.</p>
          </div>
        )}
      </div>
    </section>
  );
}
