import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../pages/AppContext";
import burger from "../../images/burger.png";

const Header = () => {
  const { loginUser, menu, setMenu } = useAppContext();

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="  bg-[#9191d2]/[.5] backdrop-blur-lg p-2  w-full mx-auto  px-2 sm:rounded-lg text-white items-center flex justify-between sm:text-blue-800 ">
      <img
        src={burger}
        alt=""
        className="w-10 cursor-pointer  sm:hidden"
        onClick={handleMenu}
      />
      <Link to="/" className="text-xl sm:text-2xl md:text-4xl font-bold ">
        BudgetBuddy
      </Link>
      <ul className="flex items-center space-x-4 font-bold sm:text-lg md:text-xl sm:pr-8 ">
        <li>{loginUser && <span className="">{loginUser.name}</span>}</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
