import React from "react";

function Location({ toggleloc }) {
  return (
    <div
      onClick={toggleloc}
      className=" h-screen w-[70px] bg-[#2c2c2c] absolute top-0 left-0 items-center font-semibold text-white flex flex-col justify-center text-[13px] text-center"
    >
      <svg
        fill="#ffffff"
        width="64px"
        height="35px"
        viewBox="0 0 24.00 24.00"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        strokeWidth="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
        </g>
      </svg>
      Your current location
    </div>
  );
}

export default Location;
