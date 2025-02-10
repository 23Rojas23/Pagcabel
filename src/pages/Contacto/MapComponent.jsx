import  { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const LeafletMapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current).setView(
        [10.156629663646143, -68.0298124320669],
        13,
      ); 
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([10.156629663646143, -68.0298124320669]) 
        .bindPopup(
          "<b>Interamericana de Cables Venezuela, S.A.</b><br>Planta y Oficina Principal Edificio CABEL, Avenida Lisandro Alvarado, Sector la Florida, Zona Industrial la Guacamaya, Valencia, Estado Carabobo",
        )
        .addTo(map);
    }
  }, []);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

export default LeafletMapComponent;
