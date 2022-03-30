import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <header className="habit-header">
        <h1 className="habit-title">Habit Tracker</h1>
        <span className="habit-totalCount">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
