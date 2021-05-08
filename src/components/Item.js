import React from "react";
import Countdown from "react-countdown";

function Item() {
  return (
    <div className="transition duration-500 w-11/12 cursor-pointer bg-white hover:text-gray-700 text-gray-400 font-semibold py-2 px-4 rounded hover:shadow mt-4">
      <div className="flex justify-between">
        <p className="p-2">Happy New Year</p>
        <div className="flex p-2 text-pink-300 hover:text-pink-500">
          <p>01 Jan 2022</p>
          <button className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-around">
        <p>250d</p>
        <p>19h</p>
        <p>31m</p>
        <p>50s</p>
        <Countdown date={Date.now() + 1000000000} />
      </div>
      <div className="relative pt-1 mt-2">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <div
            style={{ width: "30%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Item;
