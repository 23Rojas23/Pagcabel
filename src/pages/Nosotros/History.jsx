import { ParraHistoy } from "./ParraHistoy";

export const History = () => {
  return (
    <div className="w-[100%] justify-items-center">
      <div className="mb-10 mt-10 items-center border-b-4 border-[#04a444] lg:w-[900px]">
        <h1 className="my-20 text-center text-3xl font-bold">
          ¿Quiénes Somos?
        </h1>
        <ParraHistoy text="Interamericana de cables Venezuela S.A. CABEL, se encuentra ubicada en Sur América Venezuela. Siendo Valencia la ciudad industrial de mayor influencia en el país, donde estableció sus operaciones en 1958 y desde entonces forma parte del desarrollo y de la Industria Nacional. Adicionalmente ICV es el primer abastecedor de la industria petrolera en Venezuela, compitiendo exitosamente en los mercados internacionales gracias a la alta calidad de sus productos." />
        <ParraHistoy text="Todo esto gracias al apoyo, profesionalismo y responsabilidad de nuestro capital humano que cada día se esfuerza en mejorar y mantener nuestra alta calidad." />
        <ParraHistoy text="En ICV CABEL, trabajamos con tecnología de punta, logrando posicionarnos en la industria nacional y diversos lugares del mundo con sellos de calidad reconocidos internacionalmente." />
        <ParraHistoy text="La Calidad, el Servicio al Cliente, la Seriedad Comercial y el Desarrollo Tecnológico han sido las premisas por más de 50 años para ICV que aunados a la constante investigación y desarrollos de nuevos productos lo hace definitivamente los fabricantes de cables más competitivos de la Industria Nacional." />
        <ParraHistoy text="En ICV CABEL trabajamos con tecnología de punta, logrando posicionarnos en la industria nacional y diversos lugares del mundo con sellos de calidad reconocidos internacionalmente." />
        <ParraHistoy text="La Empresa práctica, promueve la aplicación y cumplimiento de los estándares ISO de la serie 9000, así como la producción con calidad, a tiempo y con el menor costo, posee certificación de su sistema de calidad a partir de marzo del 2003 y de su sistema de ambiente a partir de abril 2010 además certificados de calidad de todos los productos por el Fondo para la Normalización y Certificación de Calidad (FONDONORMA) y Underwriters Laboratories Inc (UL), empresas aseguradoras de reconocida trayectoria nacional e internacional, también cuenta con World BASC Organization en materia de seguridad en la cadena de logística (BASC) a partir de junio 2013." />
        <img src="../assets/images/__footerlogo__cabel.png" alt="" />
      </div>
    </div>
  );
};
