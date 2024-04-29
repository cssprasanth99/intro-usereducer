import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "LIGHT":
      return "light";
    case "DARK":
      return "dark";
    default:
      return state;
  }
}

function App() {
  const [theme, dispatch] = useReducer(reducer, "light");

  const toggleTheme = () => {
    dispatch({ type: theme === "light" ? "DARK" : "LIGHT" });
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Toggle Example</h1>
      <br />
      <button
        onClick={toggleTheme}
        style={{ border: "solid 1px", padding: "5px" }}
      >
        Toggle Theme
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default App;
