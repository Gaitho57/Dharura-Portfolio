// api.js
// This is a placeholder for your API functions

export const fetchIncidentData = async () => {
  // Simulate fetching incident data from an API
  // Replace this with your actual API call
  const response = await fetch("https://example.com/api/incidents");
  const data = await response.json();
  return data;
};

export const filterIncidents = (
  incident,
  selectedFilter,
  selectedIRTFilter
) => {
  // Simulate filtering incidents based on selected filters
  // Replace this with your actual filtering logic
  // This is a placeholder logic, adjust it as needed
  return (
    (selectedFilter === "all" || incident.type === selectedFilter) &&
    (selectedIRTFilter === "all" ||
      incident.irt.match(/under 1 hour/i) ||
      incident.irt.match(/1-2 hours/i) ||
      incident.irt.match(/over 2 hours/i))
  );
};
