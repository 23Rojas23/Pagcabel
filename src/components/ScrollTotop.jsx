import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al inicio en x e y
  }, [location.pathname]); // Dependencia en location.pathname para ejecutar el efecto en cada cambio de ruta

  return null; // Este componente no renderiza nada visualmente
};
