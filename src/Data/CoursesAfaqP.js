import card1 from '../assets/images/cards-afaqplus/card1.png';
import card2 from '../assets/images/cards-afaqplus/card2.png';

const coursesAfaqP = [
  {
    id: 1,
    image: card1,
    chapters: 10,
    title: "AI Prototyping 101",
    price: "2500 DA",
    priceValue: 2500, // Numeric value for filtering
    subject: "تكنولوجيا", // Technology
    level: "BEM", // BEM, secondary, university
    duration: "short" // short, medium, long
  },
  {
    id: 2,
    image: card2,
    chapters: 10,
    title: "Web Development Basics",
    price: "3000 DA",
    priceValue: 3000,
    subject: "برمجة", // Programming
    level: "secondary",
    duration: "medium"
  },
  {
    id: 3,
    image: card1,
    chapters: 10,
    title: "Data Science Fundamentals",
    price: "4500 DA",
    priceValue: 4500,
    subject: "علوم البيانات", // Data Science
    level: "university",
    duration: "long"
  },
  // ... continue updating all courses with varied subjects, levels, and durations
];

export default coursesAfaqP;
