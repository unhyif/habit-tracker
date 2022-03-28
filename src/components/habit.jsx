import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  }; // Statement

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    // this.state.count > 0 && this.setState({ count: this.state.count - 1 });
    const count = this.state.count;
    this.setState({ count: count > 0 ? count - 1 : count });
  };

  render() {
    // console.log(this.props.title);
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
