import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => this.props.onIncrement(this.props.habit);
  handleDecrement = () => this.props.onDecrement(this.props.habit);
  handleDelete = () => this.props.onDelete(this.props.habit);

  render() {
    const { title } = this.props.habit; // 전달 받은 데이터
    return (
      <li className="habit">
        <span className="habit-name">{title}</span>
        <span className="habit-count">{this.props.count}</span>
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
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
