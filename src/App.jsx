import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { NavigationbarWithDropdownMultilevelMenu } from "./Components/NavigationbarWithDropdownMultilevelMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationbarWithDropdownMultilevelMenu />
    </>
  );
}

export default App;
