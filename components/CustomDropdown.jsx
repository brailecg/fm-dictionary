import React, { useState, useRef, useEffect } from "react";

import { ChevronIconSvg } from "./svg/ChevronIconSvg";

const CustomDropdown = ({ toggleTypeFace, typeFace }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleTypeFaceAction = (type) => {
    toggleTypeFace(type);
    toggleDropdown();
  };
  const closeDropdown = (event) => {
    if (
      !triggerRef.current.contains(event.target) &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);
  const typeFaceOptions = {
    inter: "Sans Serif",
    lora: "Serif",
    inconsolata: "Mono",
  };
  const typeFaceOptionsTailwind = {
    inter: "!font-sans",
    lora: "!font-serif",
    inconsolata: "!font-mono",
  };
  const typeFaceOptionsArray = [
    { inter: "Sans Serif" },
    { lora: "Serif" },
    { inconsolata: "Mono" },
  ];
  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Trigger */}
      <button
        ref={triggerRef}
        onClick={toggleDropdown}
        className="inline-flex items-center focus:outline-none space-x-3 font-bold dark:text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}>
        <span>{typeFaceOptions[typeFace]}</span>

        <ChevronIconSvg />
      </button>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute right-0 mt-2 py-2 w-40 bg-white border dark:bg-fmblack-one border-fmgrey-one rounded-lg shadow-lg ${
          isOpen ? "" : "hidden"
        }`}
        aria-labelledby="dropdown-trigger"
        role="menu">
        {typeFaceOptionsArray.map((type, index) => {
          return (
            <button
              onClick={() => toggleTypeFaceAction(Object.keys(type)[0])}
              key={index}
              className={`block px-4 py-2 text-sm text-fmblack-three dark:text-white font-bold ${
                typeFaceOptionsTailwind[Object.keys(type)[0]]
              }`}
              role="menuitem">
              {typeFaceOptions[Object.keys(type)[0]]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDropdown;
