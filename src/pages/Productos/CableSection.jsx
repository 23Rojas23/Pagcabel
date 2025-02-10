import { useState, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/images/img-1.png";
import img1 from "../../assets/images/img-3.png";
import img2 from "../../assets/images/img-5.png";
import img3 from "../../assets/images/img-8.png";

export const CableSection = () => {
  const categories = [
    "TODOS",
    "CONSTRUCCIÓN",
    "TENSIÓN",
    "ALUMINIO",
    "COBRE",
    "CONTROL",
    "FLEXIBLES",
    "SUBMARINOS",
  ];

  const products = useMemo(() => [
    {
      category: "CONSTRUCCIÓN",
      title: "CABLES PARA CONSTRUCCIÓN",
      image: img,
      pdfUrl: "pdfs/Cables para construccion.pdf",
    },
    {
      category: "TENSIÓN",
      title: "CABLES PARA BAJA TENSIÓN",
      image: img1,
      pdfUrl: "pdfs/Cables para baja tension.pdf",
    },
    {
      category: "COBRE",
      title: "COBRE DESNUDO",
      image: img2,
      pdfUrl: "pdfs/Cobre desnudo.pdf",
    },
    {
      category: "FLEXIBLES",
      title: "CABLES FLEXIBLES",
      image: img3,
      pdfUrl: "pdfs/Cables flexibles.pdf",
    },
  ], []);

  const [selectedCategory, setSelectedCategory] = useState("TODOS");

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredProducts = useMemo(() => {
    return selectedCategory === "TODOS"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ul className="flex space-x-4 overflow-x-auto md:space-x-8">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`rounded-md px-3 py-2 text-sm font-medium focus:outline-none md:text-base ${
                    selectedCategory === category
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "text-gray-700 hover:bg-gray-200"
                  } transition-colors duration-300 ease-in-out hover:scale-105 active:scale-95`}
                  style={{ transformOrigin: "center" }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="grid grid-cols-1 gap-6 opacity-100 transition-opacity duration-1000 ease-in-out md:grid-cols-3 lg:grid-cols-3" 
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ transitionTimingFunction: "ease-out" }}
            >
              <img
                className="h-48 w-full object-fill opacity-95 transition-opacity duration-500 ease-in-out hover:opacity-100"
                src={product.image}
                alt={product.title}
                style={{ transitionTimingFunction: "ease-in-out" }}
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-green-600">
                  {product.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 opacity-80 transition-opacity duration-300 hover:opacity-100">{`${product.category}`}</p>
                <a
                  href={product.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-blue-500 transition-colors duration-300 hover:text-blue-700 hover:underline focus:outline-none"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  Ver Ficha Técnica (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CableSection;
