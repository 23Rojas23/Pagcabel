import imgMision from "../../assets/images/rollo de cable.png";

export const Mision = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="container lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-16">
          <div className="text-center md:w-1/2 lg:text-left">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 lg:text-4xl">
              Nuestra Misión
            </h2>
            <p className="text-justify indent-5 text-base leading-relaxed text-gray-700 lg:text-lg">
              Satisfacer las necesidades de nuestros clientes, tanto a nivel
              nacional como internacional, mediante la producción y
              comercialización de cables eléctricos de la más alta calidad. Nos
              enfocamos en atender las demandas del sector energético y afines,
              utilizando tecnología de punta y buscando la excelencia en cada
              una de nuestras operaciones. Aseguramos un crecimiento continuo y
              rentable, el mejor rendimiento, así como el bienestar y desarrollo
              de nuestros accionistas y grupos de interés. Fomentamos la mejora
              continua y los principios éticos en un ambiente de trabajo seguro
              y en armonía con nuestro entorno.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src={imgMision}
              alt="Rollo de cable representando la misión de la empresa"
              className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
