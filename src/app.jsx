import React from "react";
import "./app.css";
import Habit from "./components/habit"; // Import child components

function App() {
  // Parent component
  return <Habit title="Habit" />; // Child component
}

export default App;
