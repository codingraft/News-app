import React from "react";
import "./Slider.css";
import SliderContent from "./SliderContent";
import menu from "../images/menu.png";
// import MenuIcon from "@mui/icons-material/Menu";

const Slider = ({ menuOpen, setMenuOpen, setCategory }) => {
  const handleOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="slider" onClick={handleOpen}>
      {!menuOpen && <img className="sliderIcon" src={menu} alt="" />}
      {menuOpen && (
        <img
          className="sliderIconCross"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cross_icon_%28white%29.svg/1024px-Cross_icon_%28white%29.svg.png"
          alt=""
        />
      )}
      <SliderContent
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setCategory={setCategory}
      />
    </div>
  );
};

export default Slider;
