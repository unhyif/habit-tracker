import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits"; // Import child components
import Header from "./components/header";
import HabitForm from "./components/habitForm";
import SimpleHabit from "./components/simpleHabit";

class App extends Component {
  state = {
    habits: [
      { id: 1, title: "Reading", count: 0 },
      { id: 2, title: "Running", count: 0 },
      { id: 3, title: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits]; // REVIEW: Spread = 배열 아이템들을 그대로 가져옴
    // const index = habits.indexOf(habit); // NEW: 배열 아이템 수정 방법
    // habits[index].count++; // REVIEW: state 오브젝트 직접 수정 X

    const habits = this.state.habits.map((item) =>
      item === habit ? { ...habit, count: habit.count + 1 } : item
    ); // REVIEW
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habit.count;
    // habits[index].count = count > 0 ? count - 1 : count;
    if (!habit.count) return;
    const habits = this.state.habits.map((item) =>
      item === habit ? { ...habit, count: habit.count - 1 } : item
    );
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item !== habit);
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = [...this.state.habits]; // REVIEW: map 콜백 함수는 expression return해야 함
    // habits.forEach((item) => (item.count = 0));
    const habits = this.state.habits.map((item) =>
      item.count > 0 ? { ...item, count: 0 } : item
    );
    this.setState({ habits });
    // this.setState({ habits: [] }); // 목록도 리셋
  };

  handlers = {
    // REVIEW
    onIncrement: this.handleIncrement,
    onDecrement: this.handleDecrement,
    onDelete: this.handleDelete,
    onReset: this.handleReset,
  };

  handleAdd = (title) => {
    const habits = [
      ...this.state.habits,
      {
        id: this.state.habits.length + 1,
        title, // 생략 가능
        count: 0,
      },
    ]; // REVIEW
    this.setState({ habits });
  };

  render() {
    return (
      <SimpleHabit />
      // <>
      //   {/* 간단한 함수는 안 넘겨줘도 됨 */}
      //   <Header
      //     totalCount={this.state.habits.filter((item) => item.count > 0).length}
      //   />
      //   <HabitForm onAdd={this.handleAdd} />
      //   <Habits habits={this.state.habits} handlers={this.handlers} />
      // </>
    );
  }
}

export default App;

// class Foo extends React.Component {
//   handleClick(event) {
//     console.log(this);
//   }

//   render() {
//     return (
//       <button type="button" onClick={(e) => this.handleClick(e)}>
//         Click Me
//       </button>
//     );
//   }
// }
