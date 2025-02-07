import iconoFacebook from "../assets/images/facebook.svg";
import iconoTwitter from "../assets/images/youtube.svg";
import iconoYoutube from "../assets/images/twitter.svg";
import { FooterImg } from "./FooterImg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section>
      <footer className="bg-[#172f17]">
        <section className="flex-col items-center border-b border-solid border-b-white px-2 py-6">
          <nav className="grid h-full grid-flow-row gap-[1em] pb-8">
            <h2 className="mb-[30px] text-center text-[28px] font-light text-white">
              Interamericana de cables Venezuela
            </h2>
            <ul className="m-0 flex flex-wrap place-content-between gap-[1em] text-white lg:px-40">
              <li className="mb-8 sm:mb-0">
                <Link
                  to="/ "
                  className="sm:text-4 :active:text-[#04a444] hover:text-[#04a444]"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-8 sm:mb-0">
                <Link
                  to="/nosotros"
                  className="sm:text-4 :active:text-[#04a444] hover:text-[#04a444]"
                >
                  Nosotros
                </Link>
              </li>
              <li className="mb-8 sm:mb-0">
                <Link className="hover:text-[#04a444]" to="/Productos">
                  Productos
                </Link>
              </li>
              <li className="mb-8 sm:mb-0">
                <a className="hover:text-[#04a444]" href="#">
                  Contactos
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="text-center text-white">
          <div className="my-2.5 inline-flex">
            <FooterImg img={iconoFacebook} />
            <FooterImg img={iconoTwitter} />
            <FooterImg img={iconoYoutube} />
          </div>
          <h3 className="pb-6 font-light">
            Derechos reservados © Interamericana de Cables Venezuela
          </h3>
        </section>
      </footer>
    </section>
  );
};
