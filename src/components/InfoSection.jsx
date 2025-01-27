import img1 from "../assets/images/bg-1.jpg";
import img2 from "../assets/images/Vista-aerea.png";
import flecha from "../assets/images/flechaDerecha.svg";
import flechaBlanca from "../assets/images/flechaDerechaBlanca.svg";

export const InfoSection = () => {
  return (
    <section className="font-serif">
      <div className="md:grid md:h-[400px] md:grid-cols-2 xl:h-[500px]">
        <img
          src={img1}
          alt=""
          className="md:h-full md:overflow-hidden md:object-cover"
        />
        <div className="h-[200px] place-content-center bg-[#c4c2c3] pl-8 md:h-full">
          <h2 className="mb-6 w-[150px] font-serif text-[28px] font-extrabold leading-none text-[#04a444] md:text-[40px] xl:mb-16 xl:w-[350px] xl:text-[55px]">
            Lo que hacemos
          </h2>
          <div className="flex w-full">
            <a href="#" className="flex">
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
          alt=""
          className="w-full md:h-full md:overflow-hidden md:object-cover"
        />
        <div className="h-[200px] bg-[#7ba389] place-content-center pl-8 md:row-start-1 md:h-full xl:flex xl:flex-col xl:place-content-center">
          <h2 className="mb-6 text-[28px] font-extrabold leading-none text-white md:text-[40px] lg:w-[350px] xl:mb-16 xl:text-[55px]">
            Lo que queremos
          </h2>
          <div className="flex">
            <a href="">
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
};
