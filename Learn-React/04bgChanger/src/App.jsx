import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-50 
          px-2 py-3 rounded-xl"
          >
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              id="red"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              id="green"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              id="yellow"
              style={{ backgroundColor: "skyblue" }}
              onClick={() => setColor("skyblue")}
            >
              Sky Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              id="olive"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              id="violet"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
