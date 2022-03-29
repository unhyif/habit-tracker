import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app"; // Import root component
import "@fortawesome/fontawesome-free/js/all.js"; // Import libraries

console.clear();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); // Render root component
