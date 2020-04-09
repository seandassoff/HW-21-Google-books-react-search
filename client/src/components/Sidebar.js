import React from "react";
import { withRouter, Link } from "react-router-dom";

const Sidebar = props => {
  const {
    location: { pathname }
  } = props;
  return (
    <div className="sidebar-container  pt-4 pl-2 pr-2">
      <div className="container">
        <h3>The Book App</h3>
        <Link to="/" className={pathname === "/" && "active"}>
          All Books
        </Link>
        <Link to="/saved" className={pathname === "/saved" && "active"}>
          Saved Books
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
