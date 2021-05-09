import React from "react";
import Countdown from "react-countdown";

export default function Shadows() {
  return (
    <div className="animate-pulse mt-5 flex flex-col w-screen justify-center items-center space-y-6 md:w-9/12 md:p-4">
      <div className="bg-gray-300 rounded-md shadow-lg w-11/12 h-36"></div>
      <div className="bg-gray-200 rounded-md shadow-md w-11/12 h-36"></div>
      <div className="bg-gray-100 rounded-md shadow-md w-11/12 h-36"></div>
    </div>
  );
}
