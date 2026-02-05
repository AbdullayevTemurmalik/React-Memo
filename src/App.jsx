import "./App.css";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return (
    <>
      <About a={1111} b={2222} />
    </>
  );
}

export default App;
