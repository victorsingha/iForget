import "../App.css";
import React, { useState } from "react";
import Item from "./Item";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Main() {
  const [startDate, setStartDate] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App flex flex-col items-center container">
      <div className="flex mt-5 items-center w-11/12 justify-between">
        <p className="font cursor-pointer text-2xl text-pink-500">
          i
          <span className="transition duration-500 text-2xl text-gray-400 hover:text-pink-400">
            Forget
          </span>
        </p>
        <button
          onClick={openModal}
          class="transition duration-500 flex bg-white hover:text-pink-400 text-gray-400 font-semibold py-2 px-4 rounded hover:shadow"
        >
          Add Date
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add Date"
        className="m-auto mt-11 w-10/12 h-2/3 bg-gray-100 rounded shadow flex flex-col"
      >
        <div className="h-min flex items-start justify-end">
          <button
            className="p-3 text-gray-500 hover:text-gray-900"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
        <form
          className="font-semibold text-gray-500 rounded-md bg-white m-4 p-4 space-y-5"
          action=""
        >
          <p>for?</p>
          <input
            placeholder="ex. happy new year"
            className="font-semibold text-gray-500 shadow container p-2"
          ></input>
          <p>date</p>
          <DatePicker
            className="transition duration-500 ease-in-out cursor-pointer font-semibold text-gray-500 shadow py-2 pl-3 hover:text-pink-400"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <div className="container flex justify-between">
            <div></div>
            <input
              className="transition duration-500 ease-in-out font-semibold cursor-pointer py-2 px-10 shadow bg-white hover:text-pink-400"
              type="submit"
              value="Add"
            ></input>
          </div>
        </form>
      </Modal>
      <Item />
    </div>
  );
}

export default Main;
