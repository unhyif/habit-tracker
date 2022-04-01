import React, { useState, useCallback } from "react";
import "./app.css";
import Header from "./components/header";
import HabitForm from "./components/habitForm";
import Habits from "./components/habits";

const App = () => {
  // State
  const initialHabits = [
    { id: 1, title: "Coding", count: 0 },
    { id: 2, title: "Exercise", count: 0 },
    { id: 3, title: "English", count: 0 },
  ];
  const [habits, setHabits] = useState(initialHabits);

  // TODO
  // Callbacks
  const handleAdd = (title) => {
    setHabits([...habits, { id: Date.now(), title, count: 0 }]);
  };

  const handleIncrement = (habit) => {
    const updatedHabits = [...habits];
    const index = updatedHabits.indexOf(habit);
    updatedHabits[index] = { ...habit, count: habit.count + 1 };
    setHabits(updatedHabits);
  };

  const handleDecrement = (habit) => {
    if (!habit.count) return;
    const updatedHabits = [...habits];
    const index = updatedHabits.indexOf(habit);
    updatedHabits[index] = { ...habit, count: habit.count - 1 };
    setHabits(updatedHabits);
  };

  const handleDelete = (habit) => {
    setHabits(habits.filter((item) => item !== habit));
  };

  const handleReset = () => {
    const resetHabits = habits.map((item) =>
      item.count > 0 ? { ...item, count: 0 } : item
    );
    setHabits(resetHabits);
  };

  return (
    <>
      <Header totalCount={habits.filter((item) => item.count > 0).length} />
      <HabitForm onAdd={handleAdd} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
