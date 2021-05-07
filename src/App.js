import "./App.css";
import React from "react";
import Item from "./components/Item";
import Modal from "react-modal";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App flex flex-col items-center">
      <button
        onClick={openModal}
        class="flex bg-white hover:text-gray-700 text-gray-500 font-semibold py-2 px-4 rounded hover:shadow mt-4"
      >
        Add Date
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-1"
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="m-auto mt-11 w-2/3 h-2/3 bg-pink-200 rounded shadow flex flex-col"
      >
        <div className="h-min flex items-start justify-end">
          <button className="p-1" onClick={closeModal}>
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
        <p>Type</p>
      </Modal>
      <Item />
    </div>
  );
}

export default App;
