import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    const habits = this.props.habits.map((item) => (
      <Habit
        key={item.id}
        habit={item}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
        onDelete={this.props.onDelete}
      />
    ));

    return (
      <>
        <ul className="habits">{habits}</ul>
        <button className="btn resetBtn" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Habits;
