import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <button class="bg-white hover:text-gray-700 text-gray-500 font-semibold py-2 px-4 rounded hover:shadow mt-4">
        Add Date
      </button>
      <Item />
    </div>
  );
}

export default App;
