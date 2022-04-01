import React, { memo, useCallback } from "react";

const Habit = (props) => {
  console.log("habit");
  // Callbacks
  const onIncrement = () => props.onIncrement(props.habit);
  const onDecrement = () => props.onDecrement(props.habit);
  const onDelete = () => props.onDelete(props.habit);

  const { title, count } = props.habit;

  return (
    <li className="habit">
      <span className="habit__title">{title}</span>
      <span className="habit__count">{count}</span>
      <button className="btn increaseBtn" onClick={onIncrement}>
        +
      </button>
      <button className="btn decreaseBtn" onClick={onDecrement}>
        -
      </button>
      <button className="btn deleteBtn" onClick={onDelete}>
        X
      </button>
    </li>
  );
};

export default Habit;
