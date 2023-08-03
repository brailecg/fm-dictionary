import React, { useState } from "react";
import { useThemeContext } from "@/store/ThemeContext";

import { ToggleIconSvg } from "@/components/svg/ToggleIconSvg";

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
      <select
        className=" font-bold"
        name="typeFace"
        id="typeFace"
        value={typeFace}
        onChange={(e) => toggleTypeFace(e.target.value)}>
        <option value="inter">Sans Serif</option>
        <option value="lora">Serif</option>
        <option value="inconsolata">Mono</option>
      </select>

      <div
        className="toggle-container cursor-pointer inline-block"
        onClick={handleToggle}>
        <ToggleIconSvg isToggled={isToggled} />
      </div>
    </>
  );
};

export default Nav;
