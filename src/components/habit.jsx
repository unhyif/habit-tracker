import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = () => this.props.onUpdate(this.props.habit, true); // re-render 후 실행되면 새로운 Habit이 인자로 pass될 것임
  handleDecrement = () => this.props.onUpdate(this.props.habit, false);
  handleDelete = () => this.props.onDelete(this.props.habit);

  // 버튼 클릭 -> Habits의 state 변화로 인해 Habit re-render
  render() {
    // REVIEW: 변수, 함수 위치
    const { title, count } = this.props.habit; // count 값이 갱신돼야 하므로 render 안에서 Habit을 받아와야 함

    return (
      <li className="habit">
        <span className="habit-title">{title}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement} // REVIEW: 콜백
        >
          +
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          X
        </button>
      </li>
    );
  }
}

export default Habit;
