import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, title: "Coding", count: 0 },
      { id: 2, title: "Exercise", count: 0 },
      { id: 3, title: "English", count: 0 },
    ],
  };

  // REVIEW: 화살표 함수로 메소드
  handleUpdate = (inputHabit, add) => {
    if (add) inputHabit.count++;
    else {
      inputHabit.count && inputHabit.count--;
    }

    // REVIEW: 요소가 수정된 배열 얻는 방법
    const newHabits = {
      habits: this.state.habits
        .filter((habit) => habit.id !== inputHabit.id)
        .concat(inputHabit)
        .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)),
    };
    this.setState(newHabits);
  };

  handleDelete = (inputHabit) => {
    const newHabits = {
      habits: this.state.habits.filter((habit) => habit.id !== inputHabit.id),
    };
    this.setState(newHabits);
  };

  render() {
    return (
      <ul className="habits">
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
