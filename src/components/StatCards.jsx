// Small floating cards used in the image collages (hero, feature sections, login page).
import AvatarStack from "./AvatarStack";
import { studentAvatars } from "../data/courses";
import "./StatCards.css";

function ProgressBar({ percent, light = false }) {
  return (
    <div className={`progress ${light ? "progress--light" : ""}`}>
      <div className="progress__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

function SmallStar() {
  return (
    <svg viewBox="0 0 16 16" className="stat-card__star" aria-hidden="true">
      <path fill="currentColor" d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6z" />
    </svg>
  );
}

export function TopicCard({ className = "" }) {
  return (
    <div className={`stat-card stat-card--topic ${className}`}>
      <p className="stat-card__title">UI/UX Design</p>
      <p className="stat-card__small">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
    </div>
  );
}

export function ProgressCard({ className = "" }) {
  return (
    <div className={`stat-card stat-card--progress ${className}`}>
      <p className="stat-card__label">Learning Progress</p>
      <p className="stat-card__percent">55%</p>
      <ProgressBar percent={56} />
    </div>
  );
}

// lime = lime background version used on the login / register pages
export function StudentsCard({ lime = false, className = "", style }) {
  return (
    <div className={`stat-card stat-card--students ${lime ? "stat-card--lime" : ""} ${className}`} style={style}>
      <div>
        <p className="stat-card__title">Happy Students</p>
        <p className="stat-card__small stat-card__rating">
          4.5 (240) <SmallStar />
        </p>
      </div>
      <AvatarStack avatars={studentAvatars} count="2K+" size="large" countStyle={lime ? "dark" : "lime"} />
    </div>
  );
}

export function RevenueCard({ className = "" }) {
  return (
    <div className={`stat-card stat-card--blue stat-card--revenue ${className}`}>
      <div>
        <p className="stat-card__title">Total Revenue</p>
        <p className="stat-card__tiny">July 1-28</p>
      </div>
      <div className="stat-card__amount-row">
        <p className="stat-card__amount">$120.29</p>
        <span className="stat-card__badge">+12$</span>
      </div>
      <ProgressBar percent={56} light />
    </div>
  );
}

export function YearCard({ className = "" }) {
  return (
    <div className={`stat-card stat-card--blue stat-card--year ${className}`}>
      <div>
        <p className="stat-card__title">Year to Date</p>
        <p className="stat-card__tiny">2023</p>
      </div>
      <p className="stat-card__amount">$1,200.38</p>
      <span className="stat-card__badge">+12$</span>
    </div>
  );
}
