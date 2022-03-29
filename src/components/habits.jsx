import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  // handleIncrement = this.props.handlers.handleIncrement;
  // handleDecrement = this.props.handlers.handleDecrement;
  // handleDelete = this.props.handlers.handleDelete;

  render() {
    const { handleIncrement, handleDecrement, handleDelete } =
      this.props.handlers;
    const habitItems = this.props.habits.map((habit) => (
      <Habit
        key={habit.id}
        habit={habit}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      /> /* 각 habit 데이터/콜백 함수를 Habit 컴포넌트에 연결/전달 */
    ));

    return <ul className="habits">{habitItems}</ul>;
  }
}

export default Habits;
