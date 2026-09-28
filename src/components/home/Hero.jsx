import { useState } from "react";
import Header from "../Header";
import Shape from "../Shape";
import { SearchIcon } from "../Icons";
import { ProgressCard, StudentsCard, TopicCard } from "../StatCards";
import { heroShapes } from "../../data/content";
import "./Hero.css";

// onSearch is called with the search text; the Home page uses it to filter courses.
export default function Hero({ onSearch }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(text.trim());
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero blueprint" aria-labelledby="hero-title">
      <div className="decor hero__decor">
        {heroShapes.map((shape) => (
          <Shape key={shape.name + shape.x} {...shape} />
        ))}
      </div>

      <Header />

      <div className="container hero__content">
        <h1 id="hero-title" className="hero__title">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="hero__text">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="hero__search" role="search" onSubmit={handleSubmit}>
          <label className="hero__input">
            <SearchIcon className="hero__search-icon" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              placeholder="Course, topic, creator"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button type="submit" className="btn">Search</button>
        </form>
      </div>

      {/* Picture collage. It is designed at 1149 x 510px and scaled down with CSS on small screens. */}
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__stage">
          <div className="hero__ring" />
          <img className="hero__student" src="/images/hero-student.webp" alt="" />
          <TopicCard className="hero__topic" />
          <ProgressCard className="hero__progress" />
          <StudentsCard className="hero__students" />
        </div>
      </div>
    </section>
  );
}
