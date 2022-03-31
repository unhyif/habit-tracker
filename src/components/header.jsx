import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <h1 className="header__title">Habit Tracker</h1>
        <span className="header__total-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
