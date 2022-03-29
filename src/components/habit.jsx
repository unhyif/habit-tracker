import React, { Component } from "react";

class Habit extends Component {
  // 버튼 클릭 -> Habits의 prop 변화로 인해 re-render
  render() {
    // REVIEW: 변수, 함수 위치
    const {
      habit,
      onUpdate: handleUpdate,
      onDelete: handleDelete,
    } = this.props; // count 값이 갱신돼야 하므로 render 안에서 habit을 받아와야 함

    return (
      <li className="habit">
        <span className="habit-title">{habit.title}</span>
        <span className="habit-count">{habit.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={() => handleUpdate(habit, true)} // REVIEW: 콜백
        >
          +
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={() => handleUpdate(habit, false)}
        >
          -
        </button>
        <button
          className="habit-button habit-delete"
          onClick={() => handleDelete(habit)}
        >
          X
        </button>
      </li>
    );
  }
}

export default Habit;
