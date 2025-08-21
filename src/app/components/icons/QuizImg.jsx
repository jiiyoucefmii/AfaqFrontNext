import React from "react";

const QuizImg = ({ color = "white", size = 42 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.2906 2.85486L39.284 21.3548L30.0758 39.7459M21.1898 2.80046L30.1832 21.3004L20.9751 39.6915M2.88091 21.1372L12.089 2.74605L21.0824 21.246L11.8743 39.6371L2.88091 21.1372Z"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default QuizImg;
