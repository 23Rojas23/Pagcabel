import Carousel from "./Carousel";
import Imagen1 from "../../assets/images/bg-1.jpg"; // Importa las imágenes
import Imagen2 from "../../assets/images/bg-3.jpg";
import Imagen3 from "../../assets/images/cabel2.png";

export const MainSection = () => {
  const images = [Imagen1, Imagen2, Imagen3];

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center text-white">
      {/* Carrusel como fondo */}
      <Carousel images={images} interval={5000} />

      {/* Contenido de la sección */}
      <div className="bgimg text-cen z-10 flex h-screen w-screen flex-col place-content-center items-center lg:px-14">
        <h1 className="rounded-md bg-transparent text-center text-[45px] font-black px-5 text-white md:px-[200px] md:text-[60px] lg:text-[60px] xl:text-[80px]">
          <span className="italic text-[#2ECC71]">Transmitimos </span>
          <span className="text-[55px] md:text-[80px] lg:text-[80px] xl:text-[100px]">
            ENERGÍA{" "}
          </span>
          <span className="italic text-[#2ECC71]">que activa tu vida</span>
        </h1>
      </div>
    </section>
  );
};

export default MainSection;

