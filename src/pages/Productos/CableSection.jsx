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

  const products = [
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
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ul className="flex space-x-4 overflow-x-auto md:space-x-8">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className={`rounded-md px-3 py-2 text-sm font-medium focus:outline-none md:text-base ${
                    category === "TODOS"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <img
                className="h-48 w-full object-cover"
                src={product.image}
                alt={product.title}
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{`Cables Para ${product.category}`}</p>
                <a // Changed to <a> tag to open in new tab
                  href={product.pdfUrl} // Set href to pdfUrl
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Recommended for security with target="_blank"
                  className="inline-flex items-center font-medium text-blue-500 hover:text-blue-700 focus:outline-none" // Changed to inline-flex for button-like appearance
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
