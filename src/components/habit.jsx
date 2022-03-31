import React, { PureComponent } from "react";

class Habit extends PureComponent {
  onIncrement = () => this.props.onIncrement(this.props.habit);
  onDecrement = () => this.props.onDecrement(this.props.habit);
  onDelete = () => this.props.onDelete(this.props.habit);

  render() {
    const { title, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit__title">{title}</span>
        <span className="habit__count">{count}</span>
        <button
          className="btn increaseBtn"
          onClick={this.onIncrement} // REVIEW: 콜백
        >
          +
        </button>
        <button className="btn decreaseBtn" onClick={this.onDecrement}>
          -
        </button>
        <button className="btn deleteBtn" onClick={this.onDelete}>
          X
        </button>
      </li>
    );
  }
}

export default Habit;
