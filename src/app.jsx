import React, { Component } from "react";
import "./app.css";
import Header from "./components/header";
import HabitForm from "./components/habitForm";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, title: "Coding", count: 0 },
      { id: 2, title: "Exercise", count: 0 },
      { id: 3, title: "English", count: 0 },
    ],
  };

  handleAdd = (title) => {
    const habits = [...this.state.habits, { id: Date.now(), title, count: 0 }];
    this.setState({ habits });
  };

  // Receive habit, new habits, new habit

  // With indexOf
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index] = { ...habit, count: habit.count + 1 };
    this.setState({ habits });

    // With map
    // const habits = this.state.habits.map((item) =>
    //   item === habit ? { ...item, count: item.count + 1 } : item
    // );
    // this.setState({ habits });
  };

  handleDecrement = (habit) => {
    if (!habit.count) return;
    const habits = this.state.habits.map((item) =>
      item === habit ? { ...item, count: item.count - 1 } : item
    );
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item !== habit);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) =>
      item.count > 0 ? { ...item, count: 0 } : item
    );
    this.setState({ habits });
  };

  // Receive habit, existing habits, new habit
  // handleIncrement2 = (habit) => {
  //   const habits = this.state.habits;
  //   for (const item of habits) {
  //     item === habit &&
  //       (habits[habits.indexOf(item)] = { ...item, count: item.count + 1 });
  //   }
  //   this.setState({ habits });
  // };

  // Receive id, new habits, new habit
  // handleIncrement3 = (id) => {
  //   const habits = this.state.habits.map((item) =>
  //     item.id === id ? { ...item, count: item.count + 1 } : item
  //   );
  //   this.setState({ habits });
  // };

  // Receive id, existing habits, new habit
  // handleIncrement4 = (id) => {
  //   const habits = this.state.habits;
  //   for (const item of habits) {
  //     item.id === id &&
  //       (habits[habits.indexOf(item)] = { ...item, count: item.count + 1 });
  //   }
  //   this.setState({ habits });
  // };

  render() {
    return (
      <>
        <Header
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
