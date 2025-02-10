import imgVision from "../../assets/images/cabel2.png";

export const Vision = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-3xl font-bold text-gray-800 lg:text-4xl">
              Nuestra Visión
            </h1>
            <p className="text-justify indent-5 text-base leading-relaxed text-gray-700 lg:text-lg">
              Ser reconocidos a nivel internacional por la excelencia en
              servicio y la calidad superior de nuestros productos. Aspiramos a
              consolidarnos como líderes a nivel nacional en la manufacturación
              de cables eléctricos que sean sinónimo de confiabilidad, seguridad
              y eficiencia para nuestros clientes y el sector energético.
            </p>
          </div>

          <div className="md:row-start-1">
            <img
              src={imgVision}
              alt="Cable enrollado representando la visión de la empresa"
              className="h-auto max-h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
