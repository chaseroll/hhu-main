import { useEffect, useState } from 'react';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: LatLngExpression;
  zoom: number;
}

function Map({ center, zoom }: MapProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (!init) {
      // Leaflet map creating
      const map = L.map('map').setView(center, zoom);

      // OpenStreetMap layer adding
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  }, [center, zoom]);

  return <div id="map" style={{ height: '400px', borderRadius: '20px', zIndex: 0 }}></div>;
}

export default Map;
