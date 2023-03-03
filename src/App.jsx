import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="p-10 shadow rounded-bg  flex flex-col gap-5 items-center">
        <h1 className="text-3xl text-center">Hello world</h1>
        <button
          className="bg-gray-800 text-white px-5 py-2 rounded-full"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
