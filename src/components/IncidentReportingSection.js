// IncidentReportingSection.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchIncidentData, filterIncidents } from "./api";

const kenyaCenter = [1.2921, 36.8219]; // Coordinates for Nairobi, Kenya

const IncidentReportingSection = () => {
  const [incidentData, setIncidentData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all"); // eslint-disable-line no-unused-vars
  const [selectedIRTFilter, setSelectedIRTFilter] = useState("all"); // eslint-disable-line no-unused-vars
  const [map, setMap] = useState(null); // eslint-disable-line no-unused-vars

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIncidentData();
        setIncidentData(data);
      } catch (error) {
        console.error("Error fetching incident data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    // Handle filter change logic
  };

  const handleIRTFilterChange = (event) => {
    // Handle IRT filter change logic
  };

  const zoomIn = () => {
    map && map.leafletElement.zoomIn();
  };

  const zoomOut = () => {
    map && map.leafletElement.zoomOut();
  };

  const renderMarkers = () => {
    return incidentData.map((incident) => {
      const showMarker = filterIncidents(
        incident,
        selectedFilter,
        selectedIRTFilter
      );

      if (showMarker) {
        return (
          <Marker key={incident.id} position={incident.location}>
            <Popup>
              <div>
                <strong>{incident.type}</strong>
                <p>Date: {incident.date}</p>
                <p>Severity: {incident.severity}</p>
                <p>IRT: {incident.irt}</p>
                <p>{incident.details}</p>
              </div>
            </Popup>
          </Marker>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <h3>Incident Reporting</h3>
      <div className="interactive-map">
        <MapContainer
          center={kenyaCenter}
          zoom={7}
          onViewportChanged={() => {}}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {renderMarkers()}
        </MapContainer>

        <div className="map-controls">
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={zoomOut}>Zoom Out</button>
          <select value={selectedFilter} onChange={handleFilterChange}>
            {/* ... (unchanged) */}
          </select>
          <select value={selectedIRTFilter} onChange={handleIRTFilterChange}>
            {/* ... (unchanged) */}
          </select>
        </div>
      </div>
      <p>{/* Add any additional content related to incident reporting */}</p>
    </div>
  );
};

export default IncidentReportingSection;
