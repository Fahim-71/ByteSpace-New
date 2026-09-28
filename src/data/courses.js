// Course data used by the course cards.
// "categories" is used by the topic filter on the home page.

export const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    image: "/images/courses/learn-figma.webp",
    categories: ["UI/UX Design", "Graphic Design", "Digital Illustration", "Drawing & Painting"],
  },
  {
    id: 2,
    title: "Build Digital Asset",
    creator: "purepearl studio",
    image: "/images/courses/digital-asset.webp",
    categories: ["Graphic Design", "Animation", "Digital Illustration", "Crafts"],
  },
  {
    id: 3,
    title: "the Power of Big Data",
    creator: "purepearl studio",
    image: "/images/courses/big-data.webp",
    categories: ["Data Science", "Web Development", "Marketing"],
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    creator: "purepearl studio",
    image: "/images/courses/productivity.webp",
    categories: ["Productivity", "Cooking", "Music"],
  },
  {
    id: 5,
    title: "Mastering Money Management",
    creator: "purepearl studio",
    image: "/images/courses/money-management.webp",
    categories: ["Freelance & Entrepreneurship", "Productivity", "Marketing"],
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    image: "/images/courses/startup.webp",
    categories: ["Freelance & Entrepreneurship", "Creative Marketing", "Social Media", "Film & Video", "Photography"],
  },
];

// Values that are the same for every course in the design
export const courseDefaults = {
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  enrolled: "26+",
};

// Topic chips, split into the three rows used in the design
export const topicRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const learnerAvatars = [
  "/images/avatars/user-1.webp",
  "/images/avatars/user-2.webp",
  "/images/avatars/sarah.webp",
  "/images/avatars/user-3.webp",
];

export const studentAvatars = [
  "/images/avatars/user-4.webp",
  "/images/avatars/user-1.webp",
  "/images/avatars/user-5.webp",
  "/images/avatars/user-6.webp",
  "/images/avatars/user-7.webp",
  "/images/avatars/user-8.webp",
  "/images/avatars/user-9.webp",
];
