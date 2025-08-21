import React from "react";

const OverviewImg = ({ color = "#E9E9E9", size = 37 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.586 17.1896H11.5006C10.5294 17.1896 9.74316 17.9758 9.74316 18.9471V26.8404H15.586V17.1896V17.1896Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.6736 10.175H17.3302C16.359 10.175 15.5728 10.9613 15.5728 11.9325V26.8251H21.4157V11.9325C21.4157 10.9613 20.6448 10.175 19.6736 10.175Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.5117 19.8104H21.4263V26.8251H27.2692V21.5679C27.2538 20.5967 26.4675 19.8104 25.5117 19.8104Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8752 33.9166H23.1252C30.8335 33.9166 33.9168 30.8333 33.9168 23.125V13.875C33.9168 6.16665 30.8335 3.08331 23.1252 3.08331H13.8752C6.16683 3.08331 3.0835 6.16665 3.0835 13.875V23.125C3.0835 30.8333 6.16683 33.9166 13.8752 33.9166Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OverviewImg;
