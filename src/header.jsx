import React, { useState } from "react";
import "./styles.css";

export default function Header() {
  const [isSearchHovered, setSearchHovered] = useState(false);

  const handleSearchIconHover = () => {
    setSearchHovered(true);
  };

  const handleSearchIconLeave = () => {
    setSearchHovered(false);
  };
  return (
    <div className="header">
      <div className="logo">

      </div>
      <div className="nav-links">
        <nav>
          <ul >
            <li>
              <a href=" ">Home</a>
            </li>
            <li>
              <a href=" ">products</a>
            </li>
            <li>
              <a href=" ">About us</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="search-field">
        <input
          type="text"
          placeholder="Search..."
          className={`input ${isSearchHovered ? "show" : ""}`}
        />
        <i className="fas fa-search"
          onMouseEnter={handleSearchIconHover}
          onMouseLeave={handleSearchIconLeave}></i>
      </div>

    </div>
  );
}
