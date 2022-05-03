import React, { useState } from "react";
import "./Header.css";
import Slider from "./Slider";

const Header = ({ setCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={"header " + (menuOpen && "headerColor")}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_News_icon_%28iOS%29.png"
        alt=""
      />
      <h1 className="headerText">News</h1>
      <Slider
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setCategory={setCategory}
      />
    </div>
  );
};

export default Header;
