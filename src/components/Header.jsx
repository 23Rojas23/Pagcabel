import logo from "../assets/images/logo-Cabel-sin-fondo.png";
import { NavBar } from "./NavBar";
export const Header = () => {
  return (
    <header className="lg:hover:shadow-[rgba(0, 0, 0, .15);] flex h-[50px] place-content-between items-center px-4 hover:transition duration-500 ease-out md:absolute md:h-[60px] md:w-full md:text-white md:hover:bg-white md:hover:text-[#474948] md:hover:shadow-md">
      <img
        src={logo}
        alt=""
        className="md:w- w-[130px] cursor-pointer lg:w-[160px]"
      />
      <NavBar />
    </header>
  );
};
