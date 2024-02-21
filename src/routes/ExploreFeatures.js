import React, { useState } from 'react';

const ExploreFeatures = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const features = {
    emergencyResponse: [
      {
        title: 'Emergency Alerts',
        description: 'Receive real-time notifications about emergencies in your area, including potential threats, evacuation orders, and safety tips.',
        link: '/features/emergency-alerts',
      },
      {
        title: 'Incident Reporting',
        description: 'Report emergencies and share information with authorities and your community.',
        link: '/features/incident-reporting',
      },
    ],
    communityEngagement: [
      {
        title: 'Neighbourhood Forums',
        description: 'Connect with your neighbors and discuss local issues and events.',
        link: '/features/neighbourhood-forums',
      },
      {
        title: 'Community News & Events',
        description: 'Stay informed about upcoming events, meetings, and initiatives in your area.',
        link: '/features/community-news-events',
      },
    ],
    resourceHub: [
      {
        title: 'Emergency Preparedness Guide',
        description: 'Learn how to prepare for emergencies and create a plan for yourself and your family.',
        link: '/resources/emergency-preparedness-guide',
      },
      {
        title: 'Safety Resources',
        description: 'Access information about first aid, disaster preparedness, and other safety topics.',
        link: '/resources/safety-resources',
      },
    ],
    volunteerOpportunities: [
      {
        title: 'Volunteer Matching',
        description: 'Find volunteer opportunities that match your skills and interests.',
        link: '/opportunities/volunteer-matching',
      },
      {
        title: 'Community Projects',
        description: 'Get involved in projects that make a difference in your neighborhood.',
        link: '/opportunities/community-projects',
      },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="explore-features-page">
      <h1>Explore the Power of Dharura</h1>
      <p>
        Dharura offers a comprehensive suite of features designed to empower you
        and your community. Discover how each feature can benefit you and learn
        how to use them effectively.
      </p>
      <section className="feature-categories">
        <h2>Feature Categories</h2>
        <ul>
          <li
            className={selectedCategory === 'emergencyResponse' ? 'active' : ''}
            onClick={() => handleCategoryChange('emergencyResponse')}
          >
            Emergency Response
          </li>
          <li
            className={selectedCategory === 'communityEngagement' ? 'active' : ''}
            onClick={() => handleCategoryChange('communityEngagement')}
          >
            Community Engagement
          </li>
          <li
            className={selectedCategory === 'resourceHub' ? 'active' : ''}
            onClick={() => handleCategoryChange('resourceHub')}
          >
            Resource Hub
          </li>
          <li
            className={selectedCategory === 'volunteerOpportunities' ? 'active' : ''}
            onClick={() => handleCategoryChange('volunteerOpportunities')}
          >
            Volunteer Opportunities
          </li>
        </ul>
      </section>
      <section className="feature-list">
        <h2>Features</h2>
        {selectedCategory
          ? features[selectedCategory].map((feature) => (
              <div key={feature.title} className="feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link}>Learn More</a>
              </div>
            ))
          : 'Select a category to explore features'}
      </section>
    </div>
  );
};

export default ExploreFeatures;