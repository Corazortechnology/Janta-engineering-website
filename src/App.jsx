import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavigationbarWithDropdownMultilevelMenu } from "./Components/navBar.jsx";
import "./index.css";
import Example from "./Components/example.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationbarWithDropdownMultilevelMenu />
      {/* <Example /> */}
    </>
  );
}

export default App;
