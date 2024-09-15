import React, { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";

function Sidebar({ sidebar, toggleSideBar }) {
  const { setExLayer } = useContext(SearchContext);
  return (
    <div
      className={`h-screen w-[320px] bg-[#e7e7e7] transition-all duration-500 absolute top-0 ${
        sidebar ? "left-[70px]" : "left-[-250px]"
      }`}
    >
      <div className="bg-[#0052bdb7] flex h-[80px] items-center justify-center">
        <div className="bg-white rounded-3xl px-9 py-2">
          <span className="text-[#0052bdb7] text-2xl font-bold">Gis</span>
          <span className="font-semibold text-[14px]">system</span>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex flex-col text-gray-600 text-[14px]">
            <li className="px-3 py-2 border-b border-gray-300">
              Area of Interest
            </li>
            <li className="px-3 py-2 border-b border-gray-300">
              Admin Boundaries
            </li>
            <li className="px-3 py-2 border-b border-gray-300">Geological</li>
            <li className="px-3 py-2 border-b border-gray-300">
              <button onClick={() => setExLayer("topographical")}>
                Topographical
              </button>
            </li>
            <li className="px-3 py-2 border-b border-gray-300">Green Cover</li>
            <li className="px-3 py-2 border-b border-gray-300">
              Historical Water Body Coverage
            </li>
            <li className="px-3 py-2 border-b border-gray-300">
              Vulnerable Areas to Flooding
            </li>
            <li className="px-3 py-2 border-b border-gray-300">
              Groundwater Recharge Potential and Recommended Sites
            </li>
          </ul>
        </div>
      </div>
      <div
        className="absolute right-[-24px] top-[50%] bg-gray-400 p-1 rounded-r-md z-10"
        onClick={toggleSideBar}
      >
        {sidebar ? (
          <i className="ri-arrow-left-s-line"></i>
        ) : (
          <i className="ri-arrow-right-s-line"></i>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
