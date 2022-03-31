import React, { PureComponent } from "react";

class HabitForm extends PureComponent {
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.inputRef.current.value);
    e.target.reset();
  };

  render() {
    return (
      <form className="habit-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="habit-form__input"
          placeholder="Habit"
          required
        />
        <button className="btn addBtn">Add</button>
      </form>
    );
  }
}

export default HabitForm;
