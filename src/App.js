import "./App.css";
import React from "react";
import Item from "./components/Item";
import Modal from "react-modal";
import Main from "./components/Main";

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
      <Main />
    </div>
  );
}

export default App;
