import  { useState } from "react";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [tipoConsumidor, setTipoConsumidor] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, a un servidor.
    console.log("Formulario Enviado:", {
      nombre,
      correo,
      telefono,
      ubicacion,
      tipoConsumidor,
      mensaje,
    });
    // Opcionalmente, puedes resetear los campos del formulario aquí
    setNombre("");
    setCorreo("");
    setTelefono("");
    setUbicacion("");
    setTipoConsumidor("");
    setMensaje("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-2 lg:px-12">
        {/* Formulario de Contacto (Lado Izquierdo) */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Contáctenos</h2>
          <p className="mb-6 text-gray-700">Envienos sus inquietudes.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm italic text-gray-500">
              (*Campos que son requeridos)
            </p>
            <div>
              <label
                htmlFor="nombre"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Nombre*
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Su nombre"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="correo"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Dirección de correo*
              </label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Su correo electrónico"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="telefono"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Número de teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Su número de teléfono"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="ubicacion"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Estado (Venezuela)*
              </label>
              <select
                id="ubicacion"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                <option value="">Selecione su ubicación</option>
                <option value="aragua">Aragua</option>
                <option value="carabobo">Carabobo</option>
                {/* Agrega más estados de Venezuela según sea necesario */}
              </select>
            </div>
            <div>
              <label
                htmlFor="tipoConsumidor"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Tipo de consumidor*
              </label>
              <select
                id="tipoConsumidor"
                value={tipoConsumidor}
                onChange={(e) => setTipoConsumidor(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                <option value="">Por favor indique tipo de consumidor</option>
                <option value="mayorista">Mayorista</option>
                <option value="minorista">Minorista</option>
                {/* Agrega más tipos de consumidor según sea necesario */}
              </select>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows="4"
                placeholder="Escriba su mensaje aquí"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-green-500 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>

        {/* Información de Contacto (Lado Derecho) */}
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Información De Contacto
          </h2>
          <div className="text-gray-700">
            <p className="mb-2">
              <strong>Dirección:</strong>
            </p>
            <address className="mb-4 not-italic">
              Planta y Oficina Principal Edificio CABEL, Avenida Lisandro
              Alvarado, Sector la Florida, Zona Industrial la Guacamaya,
              Valencia, Estado Carabobo
            </address>
            <p className="mb-2">
              <strong>Teléfono:</strong> <br />
              +58 241 774 0146
            </p>
            <p>
              <strong>Fax:</strong> <br />
              +58 241 897 8456
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
