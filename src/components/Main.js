import "../App.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import firebasedb from "../firebase";

import "react-datepicker/dist/react-datepicker.css";
import Shadows from "./Shadows";

function Main() {
  const [startDate, setStartDate] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [reason, setReason] = useState();
  const [date, setDate] = useState();
  const oneData = {
    reason: "",
    date: "",
  };

  function snapshotToArray(snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
    return returnArr;
  }
  var dataList;
  const [list, setList] = useState([]);
  useEffect(() => {
    firebasedb.child("dateLists").on("value", (snapshot) => {
      dataList = snapshotToArray(snapshot);
      // console.log(dataList);
      setList(dataList);
    });
  }, []);
  function renderShadow() {
    if (list.length == 0) return <Shadows />;
  }
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  function handleInputChange(e) {
    var { name, value } = e.target;
    setReason(value);
  }
  function handleDateChange(date) {
    var d = formatDate(date);
    setDate(d);
  }
  function addToFireBase(data) {
    firebasedb.child("dateLists").push(data);
  }
  function handleFormSubmit(e) {
    // e.preventDefault();
    if (reason != null && date != null) {
      oneData.reason = reason;
      oneData.date = date;
      console.log(oneData);
      addToFireBase(oneData);
    }
  }

  return (
    <div className="App flex flex-col items-center container">
      <div className="md:w-2/3 flex mt-5 items-center w-11/12 justify-between mb-1">
        <p className="font cursor-pointer text-2xl text-pink-500">
          i
          <span className="transition duration-500 text-2xl text-gray-400 hover:text-pink-400">
            Forget
          </span>
        </p>
        <button
          onClick={openModal}
          className="border border-pink-100 transition duration-500 flex bg-white hover:text-pink-400 text-gray-400 font-semibold py-2 px-4 rounded hover:border-pink-300"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
        className="md:w-5/12 m-auto mt-11 w-11/12 h-2/3 bg-gray-100 rounded shadow flex flex-col"
      >
        <div className="h-min flex items-start justify-end">
          <button
            className="p-3 text-gray-500 hover:text-gray-900"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <form
          autoComplete="off"
          className="font-semibold text-gray-500 rounded-md bg-white m-4 p-4 space-y-5"
          onSubmit={handleFormSubmit}
        >
          <p>reason?</p>
          <input
            placeholder="ex. happy new year"
            className="font-semibold text-gray-500 shadow container p-2"
            name="reason"
            onChange={handleInputChange}
          ></input>
          <p>date</p>
          <DatePicker
            name="date"
            className="transition duration-500 ease-in-out cursor-pointer font-semibold text-gray-500 shadow py-2 pl-3 hover:text-pink-400"
            selected={startDate}
            onChange={(date) => {
              handleDateChange(date);
              setStartDate(date);
            }}
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
      {renderShadow()}
      {list.map((data) => (
        <Item
          key={data.key}
          id={data.key}
          reason={data.reason}
          targetDate={data.date}
        />
      ))}
    </div>
  );
}

export default Main;
