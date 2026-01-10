import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact/MapComponent.css';

// --- ICON FIX (Prevents missing marker images) ---
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
// ------------------------------------------------

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    
    if (mapInstanceRef.current) return;

    
    if (mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView([51.5323, -0.4720], 15);
      
     
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      
      L.marker([51.5323, -0.4720]).addTo(map)
        .bindPopup('Brunel University London<br>Uxbridge UB8 3PH')
        .openPopup();

    
      mapInstanceRef.current = map;
      // --- THE FIX: Force a resize check ---
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }

    
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  
  return <div ref={mapContainerRef} className="leaflet-container" />;
};

export default MapComponent;