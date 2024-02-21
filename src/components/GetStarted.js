// GetStarted.js
import React from "react";
import IntroductionSection from "./IntroductionSection";
import AccountCreationSection from "./AccountCreationSection";
import UserDashboardSection from "./UserDashboardSection";
import IncidentReportingSection from "./IncidentReportingSection";
import RealTimeCommunicationSection from "./RealTimeCommunicationSection";
import "./GetStarted.css"; // Add a separate CSS file for styling

const GetStarted = () => (
  <div className="get-started-container">
    <IntroductionSection />
    <AccountCreationSection />
    <UserDashboardSection />
    <IncidentReportingSection />
    <RealTimeCommunicationSection />
  </div>
);

export default GetStarted;
