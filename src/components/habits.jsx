import React from "react";
import Habit from "./habit";

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onReset }) => {
  const habitItems = habits.map((item) => (
    <Habit
      key={item.id}
      habit={item}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onDelete={onDelete}
    />
  ));

  return (
    <>
      <ul className="habits">{habitItems}</ul>
      <button className="btn resetBtn" onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default Habits;
