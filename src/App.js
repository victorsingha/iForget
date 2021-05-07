import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <button class="flex bg-white hover:text-gray-700 text-gray-500 font-semibold py-2 px-4 rounded hover:shadow mt-4">
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
      <Item />
    </div>
  );
}

export default App;
