import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  const [inputHandle, setInputHandle] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && inputHandle.length > 0) {
      document.querySelector(".btnSearch").click();
    }
  };
  return (
    <div className="navbars">
      <ul>
        <li className="items appName">
          <Link to="/movie-react-app" className="title">
            Movie App
          </Link>
        </li>
        <li className="items searchBox">
          <input
            onKeyDown={handleKeyDown}
            className="movieInput"
            placeholder="Search .."
            value={inputHandle}
            onChange={(e) => setInputHandle(e.target.value)}
          />
          {inputHandle.length > 0 ? (
            <Link to={"/movie-react-app/search/" + inputHandle}>
              <button className="btnSearch"> Search</button>
            </Link>
          ) : (
            <button className="btnSearch" > Search</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
