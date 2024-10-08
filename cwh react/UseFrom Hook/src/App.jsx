import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-[#212121] flex items-center justify-center">
      <Login />
    </div>
  );
}

export default App;
