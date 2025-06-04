import React from "react";
import SideBar from "../components/SideBar";

export default function Setting() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <header className="mb-6 flex justify-between items-center">
          <button className="xl:hidden text-gray-600">
            <i className="bi bi-justify text-2xl"></i>
          </button>
        </header>

        {/* Page Heading */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Setting</h3>
        </div>

        {/* Steps Widget */}
      </div>
    </div>
  );
}
