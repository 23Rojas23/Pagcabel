import img from "../../assets/images/img-1.png";
import img1 from "../../assets/images/img-3.png";
import img2 from "../../assets/images/img-5.png";
import img3 from "../../assets/images/img-8.png";

const CableSection = () => {
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
      pdfLink: "#",
      pdfSize: "85 Kb",
    },
    {
      category: "TENSIÓN",
      title: "CABLES PARA BAJA TENSIÓN",
      image: img1, 
      pdfLink: "#",
      pdfSize: "9,6 MB",
    },
    {
      category: "COBRE",
      title: "COBRE DESNUDO",
      image: img2, 
      pdfLink: "#",
      pdfSize: "4,5 MB",
    },
    {
      category: "FLEXIBLES",
      title: "CABLES FLEXIBLES",
      image: img3, 
      pdfLink: "#",
      pdfSize: "", 
    },
   
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Barra de Navegación de Categorías */}
        <nav className="mb-8">
          <ul className="flex space-x-4 overflow-x-auto md:space-x-8">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className={`rounded-md px-3 py-2 text-sm font-medium focus:outline-none md:text-base ${category === "TODOS" ? "bg-green-500 text-white hover:bg-green-600" : "text-gray-700 hover:bg-gray-200"}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Grid de Productos */}
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
                <a
                  href={product.pdfLink}
                  className="inline-flex items-center font-medium text-green-500 hover:text-green-700"
                ></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CableSection;
