import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import { Productos } from "./pages/Productos/Productos";
import { ScrollToTop } from "./components/ScrollTotop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Productos" element={<Productos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
