import imgMision from "../../assets/images/rollo de cable.png";

export const Mision = () => {
  return (
    <section className="py-12 bg-gray-50"> 
      <div className="container mx-auto px-4 lg:px-8"> 
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16"> 

      
          <div className="md:w-1/2 text-center lg:text-left"> 
            <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-gray-800"> 
              Nuestra Misión
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed indent-5 text-justify"> 
              Satisfacer las necesidades de nuestros clientes, tanto a nivel nacional como internacional, mediante la producción y comercialización de cables eléctricos de la más alta calidad.
              Nos enfocamos en atender las demandas del sector energético y afines, utilizando tecnología de punta y buscando la excelencia en cada una de nuestras operaciones.
              Aseguramos un crecimiento continuo y rentable, el mejor rendimiento, así como el bienestar y desarrollo de nuestros accionistas y grupos de interés.
              Fomentamos la mejora continua y los principios éticos en un ambiente de trabajo seguro y en armonía con nuestro entorno.
            </p>
          </div>

         
          <div className="md:w-1/2"> 
            <img
              src={imgMision}
              alt="Rollo de cable representando la misión de la empresa"
              className="rounded-lg shadow-xl w-full h-auto max-h-[400px] object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};