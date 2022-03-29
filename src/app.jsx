import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits"; // Import child components

class App extends Component {
  state = {
    habits: [
      { id: 1, title: "Reading", count: 0 },
      { id: 2, title: "Running", count: 0 },
      { id: 3, title: "Coding", count: 0 },
    ],
  };

  getTotalCount = () =>
    this.state.habits.reduce((prev, curr) => prev + curr.count, 0);

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

  handlers = {
    // REVIEW
    handleIncrement: this.handleIncrement,
    handleDecrement: this.handleDecrement,
    handleDelete: this.handleDelete,
  };

  handleAdd = () => {
    const input = document.querySelector(".habit-input");
    const habits = [...this.state.habits];
    // push returns number
    habits.push({
      id: this.state.habits.length + 1,
      title: input.value,
      count: 0,
    });
    this.setState({ habits });
    input.value = "";
  };

  handleReset = () => {
    const habits = [...this.state.habits]; // REVIEW: map 콜백 함수는 expression return해야 함
    habits.forEach((item) => (item.count = 0));
    this.setState({ habits });
    // this.setState({ habits: [] }); // 목록도 리셋
  };

  render() {
    return (
      <>
        <header className="habit-header">
          <h1 className="habit-title">Habit Tracker</h1>
          <span className="habit-totalCount">{this.getTotalCount()}</span>
        </header>
        <div>
          <input type="text" className="habit-input" placeholder="Habit" />
          <button className="habit-add" onClick={this.handleAdd}>
            Add
          </button>
        </div>
        <Habits habits={this.state.habits} handlers={this.handlers} />
        <button className="habit-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
