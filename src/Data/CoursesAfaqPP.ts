import { StaticImageData } from 'next/image';
import card1 from '../assets/images/cards-afaqplus/card1.png';
import card2 from '../assets/images/cards-afaqplus/card2.png';

// Define the Course type
export type Course = {
  id: number;
  image: StaticImageData;
  title: string;
  chapters: number;
  price: number;
  category: string;
  level: string;
  duration: string;
};

const coursesAfaqPP: Course[] = [
  {
    id: 1,
    image: card2,
    title: "AI Prototyping 101",
    chapters: 10,
    price: 2500,
    category: "Web Development",
    level: "beginner",
    duration: "short",
  },
  {
    id: 2,
    image: card1,
    title: "Math Mastery",
    chapters: 12,
    price: 3500,
    category: "math",
    level: "intermediate",
    duration: "medium",
  },
  {
    id: 3,
    image: card2,
    title: "History Insights",
    chapters: 8,
    price: 2000,
    category: "history",
    level: "advanced",
    duration: "long",
  },
  {
    id: 4,
    image: card2,
    title: "AI Prototyping 101",
    chapters: 10,
    price: 2500,
    category: "science",
    level: "beginner",
    duration: "short",
  },
  {
    id: 5,
    image: card1,
    title: "Math Mastery",
    chapters: 12,
    price: 3500,
    category: "math",
    level: "intermediate",
    duration: "medium",
  },
  {
    id: 6,
    image: card2,
    title: "History Insights",
    chapters: 8,
    price: 2000,
    category: "history",
    level: "advanced",
    duration: "long",
  },
  {
    id: 7,
    image: card2,
    title: "AI Prototyping 101",
    chapters: 10,
    price: 2500,
    category: "science",
    level: "beginner",
    duration: "short",
  },
  {
    id: 8,
    image: card1,
    title: "Math Mastery",
    chapters: 12,
    price: 3500,
    category: "math",
    level: "intermediate",
    duration: "medium",
  },
  {
    id: 9,
    image: card2,
    title: "History Insights",
    chapters: 8,
    price: 2000,
    category: "history",
    level: "advanced",
    duration: "long",
  },
  {
    id: 10,
    image: card2,
    title: "AI Prototyping 101",
    chapters: 10,
    price: 2500,
    category: "science",
    level: "beginner",
    duration: "short",
  },
  {
    id: 11,
    image: card1,
    title: "Math Mastery",
    chapters: 12,
    price: 3500,
    category: "math",
    level: "intermediate",
    duration: "medium",
  },
  {
    id: 12,
    image: card2,
    title: "History Insights",
    chapters: 8,
    price: 2000,
    category: "history",
    level: "advanced",
    duration: "long",
  },
];

export default coursesAfaqPP;