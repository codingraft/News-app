import React from "react";
import "./SliderContent.css";
import catagories from "../data/Category";

const SliderContent = ({ menuOpen, setMenuOpen, setCategory }) => {
  return (
    <div className={"sliderContent " + (menuOpen && "active")}>
      <h1 className="catagory">Catagories</h1>
      <div className="line"></div>
      <ul className="sliderContentList">
        {catagories.map((text, index) => (
          <li onClick={() => setCategory(text)} className="listText">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderContent;
