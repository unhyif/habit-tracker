import React, { memo } from "react";

const Habit = memo((props) => {
  const { habit } = props;

  // Callbacks
  const onIncrement = () => props.onIncrement(habit);
  const onDecrement = () => props.onDecrement(habit);
  const onDelete = () => props.onDelete(habit);

  return (
    <li className="habit">
      <span className="habit__title">{habit.title}</span>
      <span className="habit__count">{habit.count}</span>
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
});

export default Habit;
