import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = { name: "Rohit", age: 26 };
  let myArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-xl mb-5">
        TailWind Test
      </h1>
      <Card
        channel="ChaiAurCode"
        someObj={myObj}
        myArr={myArr}
        username={"Analyst-Ninja"}
        btnText="Click Me"
      />
      <Card username="DS-Ninja" btnText="Visit Me !" />
    </>
  );
}

export default App;
