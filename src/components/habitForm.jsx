import React, { memo, useCallback } from "react";

const HabitForm = ({ onAdd }) => {
  console.log("form");
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputRef.current.value);
    e.target.reset();
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="habit-form__input"
        placeholder="Habit"
        required
      />
      <button className="btn addBtn">Add</button>
    </form>
  );
};

export default HabitForm;
