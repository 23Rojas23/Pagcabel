import { Valores } from "./Valores";
import img1 from "../../assets/images/iconoValores1-removebg-preview.png";
import img2 from "../../assets/images/iconoValores2-removebg-preview.png";

export const ValoresContainer = () => {
  return (
    <div className="flex h-auto flex-col items-center justify-center py-12 md:py-16 lg:px-12 lg:py-20">
      <h1 className="mb-10 text-center font-serif text-4xl font-semibold text-[#04a44c] md:mb-20 md:text-5xl lg:mb-28 lg:text-6xl">
        Nuestros valores
      </h1>
      <div className="lg:flex lg:gap-12">
        <Valores img={img1} text="Ser dignos de Confianza" />
        <Valores
          img={img2}
          text="Buscar la Excelencia en todo lo que hacemos"
        />
      </div>
    </div>
  );
};
