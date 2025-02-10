import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MainSection } from "./MainSection";
import ContactForm from "./ContactForm";
import MapComponent from "./MapComponent";

export const Contacto = () => {
    return <div>
        <Header />
        <MainSection />
      <ContactForm />
      <MapComponent/>
    <Footer/>
  </div>;
};
