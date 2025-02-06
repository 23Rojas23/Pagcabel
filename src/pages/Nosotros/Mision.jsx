import imgMision from "../../assets/images/rollo de cable.png";

export const Mision = () => {
  return (
    <div className="grid-cols-2 lg:grid lg:h-[500px] lg:w-[100%] ">
      <div className=" content-evenly justify-items-center lg:h-[500px]">
        <h2 className="mb-10 text-center text-3xl font-bold">Misión</h2>
        <p className="px-10 text-justify indent-5 text-lg ">
          Satisfacer las necesidades de los clientes tanto a nivel nacional como
          internacional produciendo y comercializando cables eléctricos,
          atendiendo las necesidades del sector energético y afines, a través de
          la mejor tecnología y excelencia en nuestras operaciones; asegurando
          el continuo crecimiento, rentabilidad, mejor rendimiento, bienestar y
          desarrollo de nuestros accionistas y grupo de interés; fomentando la
          mejora continua y principios éticos en un ambiente seguro y en armonía
          con el entorno.
        </p>
      </div>
      <img
        src={imgMision}
        alt=""
        className="lg: lg:h-[500px] object-left-bottom object-cover lg:w-[100%]"
      />
    </div>
  );
};
