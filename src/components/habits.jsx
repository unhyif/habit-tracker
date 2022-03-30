import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  // handleIncrement = this.props.handlers.handleIncrement;
  // handleDecrement = this.props.handlers.handleDecrement;
  // handleDelete = this.props.handlers.handleDelete;

  render() {
    // 각 habit 데이터/콜백 함수를 Habit 컴포넌트에 연결/전달
    const habits = this.props.habits.map((item) => (
      <Habit
        key={item.id}
        habit={item}
        count={item.count}
        onIncrement={this.props.handlers.onIncrement}
        onDecrement={this.props.handlers.onDecrement}
        onDelete={this.props.handlers.onDelete}
      />
    ));

    return (
      <>
        <ul className="habits">{habits}</ul>
        <button className="habit-reset" onClick={this.props.handlers.onReset}>
          {/* 재사용 가능성 X */}
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
