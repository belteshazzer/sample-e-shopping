import React, { useState } from "react";
import "./styles.css";

export default function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchIconHover = () => {
    setSearchVisible(true);
  };

  const handleSearchIconLeave = () => {
    setSearchVisible(false);
  };
  return (
    <div>
      <div className="header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href=" ">Home</a>
            </li>
            <li>
              <a href=" ">products</a>
            </li>
            <li>
              <a href=" ">About us</a>
            </li>
            <li
              className="search-icon"
              onMouseEnter={handleSearchIconHover}
              onMouseLeave={handleSearchIconLeave}
            >
              <i className="fas fa-search"></i>
              {isSearchVisible && (
                <div className="search-field">
                  <input type="text" placeholder="Search..." />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
