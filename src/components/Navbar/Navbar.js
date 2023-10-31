import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar mb-4">
      <div className="container">
        <Link to="/">
          <h1 className="flex items-center justify-center  IBM-bold text-2xl">
            Rick and Morty
          </h1>
        </Link>

        <div className="flex justify-end">
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link m-4 text-gray-500">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link m-4  text-gray-500">
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link m-4  text-gray-500"
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
