import { useState } from "react";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import FeaturedCourses from "../components/home/FeaturedCourses";
import LearningPaths from "../components/home/LearningPaths";
import Growth from "../components/home/Growth";
import CreatorCta from "../components/home/CreatorCta";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  // The search text lives here because two sections need it:
  // Hero sets it, FeaturedCourses uses it to filter the cards.
  const [search, setSearch] = useState("");

  return (
    <>
      <main>
        <Hero onSearch={setSearch} />
        <Partners />
        <FeaturedCourses search={search} onClearSearch={() => setSearch("")} />
        <LearningPaths />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
