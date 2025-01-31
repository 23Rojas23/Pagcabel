/*import img1 from "../assets/images/bg-1.jpg";
import img2 from "../assets/images/Vista-aerea.png";
import flecha from "../assets/images/flechaDerecha.svg";
import flechaBlanca from "../assets/images/flechaDerechaBlanca.svg";

export const InfoSection = () => {
  return (
    <section className="font-serif">
      <div className="md:grid md:h-[400px] md:grid-cols-2 xl:h-[500px]">
        <img
          src={img1}
          alt="rollo de cable en planta de ICV"
          className="md:h-full md:overflow-hidden md:object-cover"
        />
        <div className="h-[200px] place-content-center bg-[#c4c2c3] pl-8 md:h-full">
          <h2 className="mb-6 w-[150px] font-serif text-[28px] font-extrabold leading-none text-[#04a444] md:text-[40px] xl:mb-16 xl:w-[350px] xl:text-[55px]">
            Lo que hacemos
          </h2>
          <div className="flex w-full">
            <a href="#" className="flex" aria-label="Conoce mas sobre nosotros">
              <p className="text-[18px] font-semibold text-[#04a444] md:text-[20px] xl:text-[24px]">
                Conoce mas sobre{" "}
                <span className="italic text-white hover:text-[#04a444]">
                  nosotros
                </span>
              </p>
              <img
                src={flecha}
                alt="flecha"
                className="w-[30px] place-content-center"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="md:grid md:h-[400px] md:grid-cols-2 xl:h-[500px]">
        <img
          src={img2}
          alt="Vista aerea de la planta de ICV"
          className="w-full md:h-full md:overflow-hidden md:object-cover"
        />
        <div className="h-[200px] bg-[#7ba389] place-content-center pl-8 md:row-start-1 md:h-full xl:flex xl:flex-col xl:place-content-center">
          <h2 className="mb-6 text-[28px] font-extrabold leading-none text-white md:text-[40px] lg:w-[350px] xl:mb-16 xl:text-[55px]">
            Lo que queremos
          </h2>
          <div className="flex">
            <a href="" aria-label="Conoce mas sobre nosotros">
              <p className="w-[250px] text-[16px] font-semibold text-white md:text-[18px] xl:w-[650px] xl:text-[24px]">
                Ser reconocidos a nivel nacional e internacional por el servicio
                y calidad en nuestros
                <span className="italic text-yellow-400 hover:text-white">
                  {" "}
                  productos
                </span>
              </p>
            </a>
            <img
              src={flechaBlanca}
              alt="flecha"
              className="w-[40px] place-content-center text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};*/

import img1 from "../assets/images/bg-1.jpg";
import img2 from "../assets/images/Vista-aerea.png";
import flecha from "../assets/images/flechaDerecha.svg";
import flechaBlanca from "../assets/images/flechaDerechaBlanca.svg";
import { InfoBlock } from "./InfoBlock";

export const InfoSection = () => {
  return (
    <section className="">
      <InfoBlock
        image={img1}
        altText="Imagen de fondo 1"
        title="Lo que hacemos"
        description="Conoce mas sobre "
        linkText="nosotros"
        linkHref="https://nosotros-pagcabel.vercel.app/#"
        arrowImage={flecha}
        bgColor="bg-[#c4c2c3]"
        textColor="text-[#04a444]"
        hoverColor="hover:text-white"
      />
      <InfoBlock
        image={img2}
        altText="Vista aérea"
        title="Lo que queremos"
        description="Ser reconocidos a nivel nacional e internacional por el servicio y calidad en nuestros "
        linkText="productos"
        linkHref="#"
        arrowImage={flechaBlanca}
        bgColor="bg-[#7ba389]"
        textColor="text-white"
        hoverColor="hover:text-[#04a444]"
      />
    </section>
  );
};
