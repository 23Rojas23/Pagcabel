import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
