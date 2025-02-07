import { useState } from "react";
import logo from "../assets/images/logo-Cabel-sin-fondo.png";
import logo1 from "../assets/images/logo1.png";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [currentLogo, setCurrentLogo] = useState(logo1);

  return (
    <header
      className="lg:hover:shadow-[rgba(0, 0, 0, .15);] absolute z-20 flex h-[50px] w-screen place-content-between items-center px-4 duration-500 ease-out hover:transition sm:text-white md:absolute md:h-[60px] md:w-full md:hover:bg-white md:hover:text-[#474948] md:hover:shadow-md"
      onMouseEnter={() => setCurrentLogo(logo)}
      onMouseLeave={() => setCurrentLogo(logo1)}
    >
      <img
        src={currentLogo}
        alt="Logo"
        className="md:w- w-[130px] cursor-pointer lg:w-[160px]"
      />
      <NavBar />
    </header>
  );
};