// InteractiveMap.jsx

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import './InteractiveMap.css'; 

const InteractiveMap = () => {
  console.log('InteractiveMap component rendered'); // Add this line
  return (
    <div className="map-container"> {/* Use a div for the map container */}
      <MapContainer center={[1.2921, 36.8219]} zoom={6}>
        <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;