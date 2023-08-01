import React, { useState } from "react";
import classnames from "classnames";

export default function SidenavExample() {
  const [show, setShow] = useState(false);

  const toggleSidenav = () => {
    setShow(!show);
  };

  const sidenavClasses = classnames({
    "transition-all duration-500 h-screen mt-5 fixed z-10": true,
    "-right-80 w-200": !show,
    "right-0 w-80": show,
  });

  return (
    <div className="w-full h-full">
      <button onClick={toggleSidenav}>Toggle Sidenav</button>
      <div className={sidenavClasses}>
        <ul className="flex flex-col items-center w-full">
          <li className="text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer">Home</li>
          <li className="text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer">Gallery</li>
          <li className="text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer">Store</li>
          <li className="text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer">Favorites</li>
          <li className="text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer">Saved</li>
        </ul>
      </div>
    </div>
  );
}
