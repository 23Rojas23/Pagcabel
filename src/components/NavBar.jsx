import { useState } from "react";

import burgerMenu from "../assets/images/icon-menu.svg";
import closeBtn from "../assets/images/icon-menu-close.svg";

export const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <div className="">
      <div className="w-[full] duration-200 ease-in-out lg:hover:transition lg:hover:text-[#474948]">
        <ul
          className={`${menuClicked ? "" : "hidden"} fixed right-0 top-0 z-50 h-full w-full bg-white p-[24px] text-center text-[20px] font-semibold transition-transform duration-500 ease-in-out sm:relative sm:flex sm:h-auto sm:w-[438px] sm:place-content-around sm:items-center sm:p-0 sm:text-[16px] sm:bg-transparent md:font-bold lg:bg-transparent lg:font-bold`}
        >
          <li
            className={`${menuClicked ? "" : "hidden"} flex cursor-pointer place-content-end sm:hidden`}
          >
            <img
              className="mb-[87px] h-8 w-8"
              src={closeBtn}
              onClick={handleClick}
              alt=""
            />
          </li>
          <li className="mb-8 sm:mb-0">
            <a className="sm:text-4 hover:text-[#04a444]" href="#">
              Inicio
            </a>
          </li>
          <li className="mb-8 sm:mb-0">
            <a className="hover:text-[#04a444]" href="#">
              Nosotros
            </a>
          </li>
          <li className="mb-8 sm:mb-0">
            <a className="hover:text-[#04a444]" href="#">
              Productos
            </a>
          </li>
          <li className="mb-8 sm:mb-0">
            <a className="hover:text-[#04a444]" href="#">
              Contactos
            </a>
          </li>
        </ul>
        <img
          className={`${menuClicked ? "hidden" : ""} h-4 w-10 cursor-pointer sm:hidden`}
          src={burgerMenu}
          onClick={handleClick}
          alt=""
        />
      </div>
      {menuClicked && (
        <div className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"></div>
      )}
    </div>
  );
};
