import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, title: "Reading", count: 0 },
      { id: 2, title: "Running", count: 0 },
      { id: 3, title: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => console.log(habit.id);
  handleDecrement = (habit) => console.log(habit.id);
  handleDelete = (habit) => console.log(habit.id);

  render() {
    const habitItems = this.state.habits.map((habit) => (
      <Habit
        key={habit.id}
        habit={habit}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      /> /* 각 habit 데이터/콜백 함수를 Habit 컴포넌트에 연결/전달 */
    ));

    return <ul className="habits">{habitItems}</ul>;
  }
}

export default Habits;
