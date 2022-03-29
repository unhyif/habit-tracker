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

  handleIncrement = (habit) => {
    // habit.count++;
    // this.setState(this.state);
    const habits = [...this.state.habits]; // REVIEW: Spread = 배열 아이템들을 그대로 가져옴
    const index = habits.indexOf(habit); // NEW: 배열 아이템 수정 방법
    habits[index].count++; // REVIEW: state 오브젝트 직접 수정 X
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habit.count;
    habits[index].count = count > 0 ? count - 1 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item !== habit);
    this.setState({ habits });
  };

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
