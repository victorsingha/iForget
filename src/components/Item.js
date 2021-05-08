import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

function Item(props) {
  const [percent, setPercent] = useState(100);
  const [date, setDate] = useState(props.targetDate); //`2022-01-01T00:00:00`
  useEffect(() => {});

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      //setDate() to new CountDown
      return (
        <>
          <p className="transition duration-400 ease-in-out font text-3xl">
            Completed
          </p>
        </>
      );
    } else {
      // Render a countdown
      return (
        <>
          <p className="flex container justify-between px-3 text-3xl">
            <p onChange={setPercent(100 - (days / 365) * 100)}>
              {days}
              <span>d </span>
            </p>
            <p>
              {hours}
              <span>h </span>
            </p>
            <p>
              {minutes}
              <span>m </span>
            </p>
            <p>
              {seconds}
              <span>s</span>
            </p>
          </p>
        </>
      );
    }
  };
  return (
    <div className="md:w-2/3 shadow transition duration-500 w-11/12 cursor-pointer bg-white hover:text-gray-700 text-gray-400 font-semibold py-2 px-4 rounded hover:shadow-lg mt-4 mb-3">
      <div className="flex justify-between">
        <p className="p-2">{props.reason}</p>
        <div className="flex p-2 text-pink-300 hover:text-pink-500">
          <p>{props.targetDate}</p>
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
        <Countdown date={date} renderer={renderer} />
      </div>
      <div className="relative pt-1 mt-2">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <div
            style={{ width: percent + "%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Item;
