import imgVision from "../../assets/images/cabel2.png";
export const Vision = () => {
  return (
    <div className="lg:grid lg:h-[500px] lg:w-[100%] lg:grid-cols-2 ">
      <div className="lg:w-[100%] justify-items-center pb-10 content-evenly" >
        <h1 className="mb-10 pt-10 text-center text-3xl font-bold ">
          Visión
        </h1>
        <p className="mb-5 px-10 text-justify indent-5 text-lg  ">
          Ser reconocidos a nivel internacional por el servicio y calidad en
          nuestros productos y lideres a nivel nacional en la manufacturación de
          cables eléctrico confiables, seguros y eficientes.
        </p>
      </div>
      <img src={imgVision} className="row-start-1 lg:h-[500px] lg:w-[100%] object-cover" />
    </div>
  );
};
