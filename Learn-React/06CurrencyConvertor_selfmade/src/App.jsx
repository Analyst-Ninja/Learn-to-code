import { useState } from "react";
import "./App.css";
import InputBox from "./componets/InputBox";
import SubmitButton from "./componets/SubmitButton";
// import InputBox from "./componets/InputBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-r from-red-200 to-blue-800 h-screen">
        <div className="items-center flex align-middle justify-center p-10 rounded-3xl">
          <div className="items-center flex align-middle justify-center p-14 bg-blue-950 w-120 rounded-3xl border-solid border-spacing-6 border-4 border-b-2 border-t-2 border-black font-extrabold text-gray-300 text-3xl shadow-2xl">
            Currency Convertor
          </div>
        </div>
        <div className="items-center flex justify-center">
          <div className="bg-gray-400 text-center align-middle p-8 rounded-2xl opacity-80 border-solid border-spacing-6 border-4 border-b-2 border-t-2 border-black shadow-2xl">
            {InputBox("From", "px-2", false)}
            {InputBox(`To`, '"padding" : 8px', true)}
            {SubmitButton("Submit")}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
