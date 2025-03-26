

import { Valores } from "./Valores";
import img1 from "../../assets/images/iconoValores1-removebg-preview.png";
import img2 from "../../assets/images/iconoValores2-removebg-preview.png";

export const ValoresContainer = () => {
  return (
    <div className="flex h-auto flex-col items-center justify-center py-12 md:py-16 lg:flex-row lg:gap-12 lg:px-12 lg:py-20">
      <Valores img={img1} text="Ser dignos de Confianza" />
      <Valores img={img2} text="Buscar la Excelencia en todo lo que hacemos" />
    </div>
  );
};
