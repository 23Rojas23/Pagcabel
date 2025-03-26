import img1 from "../../assets/images/bg-1.jpg";
import img2 from "../../assets/images/Vista-aerea.png";
import img3 from "../../assets/images/distrubucion.png";
import flecha from "../../assets/images/flechaDerecha.svg";
import flechaBlanca from "../../assets/images/flechaDerechaBlanca.svg";
import { InfoBlock } from "./InfoBlock";

export const InfoSection = () => {
  return (
    <section className="m-10">
      <InfoBlock
        image={img1}
        altText="Imagen de fondo 1"
        title="Lo que hacemos"
        description="Conoce mas sobre "
        linkText="nosotros"
        linkHref="/nosotros"
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
        linkHref="/productos"
        arrowImage={flechaBlanca}
        bgColor="bg-[#7ba389]"
        textColor="text-white"
        hoverColor="hover:text-[#04a444]"
      />
      <InfoBlock
        image={img3}
        altText="Vista aérea"
        title="¿Necesitas mas información?"
        description=""
        linkText="Contactanos"
        linkHref="/contacto"
        arrowImage={flechaBlanca}
        bgColor="bg-[#7ba389]"
        textColor="text-white"
        hoverColor="hover:text-[#04a444]"
      />
    </section>
  );
};
