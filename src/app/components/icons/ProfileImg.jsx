import React from "react";

const ProfileImg = ({ color = "#FFC800", size = 39 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.2548 13.9426V25.0575C34.2548 26.8775 33.2798 28.5676 31.7035 29.4938L22.051 35.0676C20.4748 35.9776 18.5248 35.9776 16.9323 35.0676L7.27977 29.4938C5.70352 28.5838 4.72852 26.8938 4.72852 25.0575V13.9426C4.72852 12.1226 5.70352 10.4325 7.27977 9.50624L16.9323 3.9325C18.5085 3.0225 20.4585 3.0225 22.051 3.9325L31.7035 9.50624C33.2798 10.4325 34.2548 12.1063 34.2548 13.9426Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5001 17.875C21.5912 17.875 23.2864 16.1798 23.2864 14.0887C23.2864 11.9976 21.5912 10.3026 19.5001 10.3026C17.409 10.3026 15.7139 11.9976 15.7139 14.0887C15.7139 16.1798 17.409 17.875 19.5001 17.875Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 27.0724C26 24.1474 23.0913 21.775 19.5 21.775C15.9087 21.775 13 24.1474 13 27.0724"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProfileImg;
