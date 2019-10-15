import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <h1 className="navbar-brand" style={{ fontFamily: "Gruppo" }}>
          <i className={icon}></i> {title}
        </h1>
        <ul style={{ marginBottom: "5px" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
