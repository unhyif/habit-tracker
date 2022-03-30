import React, { PureComponent } from "react";

class HabitForm extends PureComponent {
  inputRef = React.createRef(); // React element와 연결, DOM 오브젝트 직접 접근 X
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.inputRef.current.value);
    this.inputRef.current.value = "";
    // this.formRef.current.reset() // e.target.reset()
  };

  render() {
    return (
      <form className="habit-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="habit-input"
          placeholder="Habit"
          required
        />
        <button className="habit-add">Add</button>
      </form>
    );
  }
}

export default HabitForm;
