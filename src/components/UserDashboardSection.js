// UserDashboardSection.js
import React, { useState } from "react";
import "./UserDashboardSection.css";

const UserDashboardSection = () => {
  const [isWidgetSettingsOpen, setWidgetSettingsOpen] = useState(false);

  const openWidgetSettings = () => {
    setWidgetSettingsOpen(true);
  };

  const closeWidgetSettings = () => {
    setWidgetSettingsOpen(false);
  };

  return (
    <div className="user-dashboard-section">
      <h3>Your Personalized User Dashboard</h3>
      <p>
        Explore your customizable dashboard and stay informed with widgets
        tailored to your preferences.
      </p>
      <div className="customizable-dashboard">
        <button onClick={openWidgetSettings}>Customize Widgets</button>
      </div>
      {/* Widget settings modal */}
      {isWidgetSettingsOpen && (
        <div className="widget-settings-modal">
          {/* Visually appealing modal with clear options */}
          <button onClick={closeWidgetSettings}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboardSection;
