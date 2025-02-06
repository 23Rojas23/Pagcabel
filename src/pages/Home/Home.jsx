import { Header } from "../../components/Header";
import MainSection from "./MainSection";
import { Body } from "./Body";
import { Footer } from "../../components/Footer";
import Carousel from "./Carousel";
import Imagen1 from "../../assets/images/bg-3.jpg";
import Imagen2 from "../../assets/images/cabel2.png";
import Imagen3 from "../../assets/images/cabel1.png";

function Home() {
  const images = [Imagen1, Imagen2, Imagen3];
  return (
    <>
      <Header />
      <MainSection />
      <Body />
      <Carousel images={images} />
      <Footer />
    </>
  );
}

export default Home;
