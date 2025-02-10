import img from "../../assets/images/bg-1.jpg";

export const MainSection = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center text-white ">
      <img
        src={img}
        alt=""
        className="absolute inset-0 z-0 h-full w-full overflow-hidden object-cover"
      />
      <div className="bgimg relative flex h-screen w-screen flex-col place-content-center items-center bg-cover bg-center bg-no-repeat text-center text-white md:flex-row lg:px-14">
        <h2 className="bg-transparent text-center text-4xl font-black md:w-[50%] md:border-r-4 md:p-0 md:pr-10 md:text-right md:text-[55px] md:leading-none xl:text-[80px]">
          Conoce<br></br>quiénes somos
        </h2>
        <p className="place-content-center p-5 text-[14px] font-semibold md:h-[110px] md:w-[50%] md:p-0 md:px-10 md:text-left md:text-[18px] lg:pl-10 lg:text-[18px] xl:text-[25px]">
          En iCV estamos comprometidos a mejorar la satisfaccion de nuestros
          clientes y ser la mejor opción reconocida por ellos.
        </p>
        <img src="" alt="" />
      </div>
    </section>
  );
};
