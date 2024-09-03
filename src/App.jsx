import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const getMode = () => {
    return (
      JSON.parse(
        localStorage.getItem("mode"),
        localStorage.getItem("isActive")
      ) || false
    );
  };
  const [dark, setMode] = useState(getMode());
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
    localStorage.setItem("active", JSON.stringify(isActive));
  }, [dark]);

  const [isActive, setIsActive] = useState(getMode());
  console.log(isActive);
  return (
    <>
      <div className={dark ? "App dark-mode" : "default"}>
        <div className={`nav ${isActive ? "active" : "inactive"}`}>
          <label className="switch">
            <input
              type="checkbox"
              className={isActive ? "active" : "inactive"}
              onChange={() => {
                setMode(!dark);
                setIsActive(!isActive);
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className={`content ${isActive ? "active" : "inactive"}`}>
          <h1>{dark ? "Dark Mode is On" : "Light Mode is On"}</h1>
          <p>Want to change the Theme? Press toggle</p>
        </div>
      </div>
    </>
  );
}

export default App;
