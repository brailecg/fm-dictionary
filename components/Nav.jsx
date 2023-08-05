import React, { useState } from "react";
import { useThemeContext } from "@/store/ThemeContext";

import { ToggleIconSvg } from "@/components/svg/ToggleIconSvg";

import { BookIconSvg } from "./svg/BookIconSvg";
import CustomDropdown from "./CustomDropdown";

const Nav = () => {
  const { typeFace, toggleThemeHandler, toggleTypeFace } = useThemeContext();
  const [isToggled, setToggled] = useState(false);
  const toggleTheme = () => {
    toggleThemeHandler();
  };

  const handleToggle = () => {
    setToggled((prevState) => !prevState);
    toggleTheme();
  };
  return (
    <>
      <nav className={` flex justify-between items-center`}>
        <BookIconSvg />
        <div className={` flex`}>
          <CustomDropdown toggleTypeFace={toggleTypeFace} typeFace={typeFace} />

          <div
            className={` w-[1px] h-8 flex-shrink-0 bg-fmgrey-two mx-3 lg:mx-7`}></div>
          <div
            className="toggle-container cursor-pointer inline-block"
            onClick={handleToggle}>
            <ToggleIconSvg isToggled={isToggled} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
