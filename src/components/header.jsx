import React, { memo } from "react";
const Header = memo(({ totalCount }) => (
  <header>
    <h1 className="header__title">Habit Tracker</h1>
    <span className="header__total-count">{totalCount}</span>
  </header>
));

export default Header;
