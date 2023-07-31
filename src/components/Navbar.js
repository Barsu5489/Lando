import React from "react";
import './Navbar.css'
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Web Dev</a>
      </div>
      <ul className="links">
        <li><a href="hero">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
      <a href="" className="action-btn">Get started</a>
      <div className="toggle-btn" onClick={toggleDropdown}>
        <i
          className={`fa-solid fa-bars ${
            isDropdownOpen ? "fa-xmark" : ""
          }`}
          aria-hidden="true"
        />
      </div>
      <div className="dropdown-menu" style={isDropdownOpen ? {} : {display: "none"}}>
        <li><a href="hero">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="Contact">Contact</a></li>
        <li> <a href="#" class="action-btn">Get started</a></li>
      </div>
    </nav>
  );
};

export default Navbar;
