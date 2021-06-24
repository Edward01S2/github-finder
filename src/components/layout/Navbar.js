import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="bg-blue-800 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <NavLink to="/" exact>
              <h1 className="text-2xl font-bold">
                <i className="fab fa-github mr-2"></i>
                {title}
              </h1>
            </NavLink>
          </div>
          <div className="flex text-gray-200 font-medium sm:space-x-3">
            <NavLink
              to="/"
              exact
              activeClassName="bg-blue-900 text-white"
              className="px-3 py-2 rounded-md hover:text-white hover:bg-blue-700"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              exact
              activeClassName="bg-blue-900 text-white"
              className="px-3 py-2 rounded-md hover:text-white hover:bg-blue-700"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
