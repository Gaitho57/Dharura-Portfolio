import React, { useState } from "react";
import styles from "./AccountCreationSection.css";

const AccountCreationSection = () => {
  const [step, setStep] = useState(1); // Step tracker for tutorial

  const handleChange = (event) => {
    // Handle input changes as needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data and handle error or success scenarios
    if (step < 3) {
      setStep(step + 1); // Advance tutorial on submit if not the final step
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <p className="welcome-text">
              Welcome to Dharura! Let's create your free account to unlock
              personalized features and contribute to disaster response efforts.
            </p>
            <div className="social-buttons">
              <button
                type="button"
                className="google-btn"
                onClick={handleSubmit}
                aria-label="Sign Up with Google"
              >
                <img src="google-icon.png" alt="Google Icon" />
                Sign Up with Google
              </button>
              <button
                type="button"
                className="facebook-btn"
                onClick={handleSubmit}
                aria-label="Sign Up with Facebook"
              >
                <img src="facebook-icon.png" alt="Facebook Icon" />
                Sign Up with Facebook
              </button>
            </div>
            <p className="alternative-text">
              Or choose your preferred sign-up method below:
            </p>
          </>
        );

      case 2:
        return (
          <>
            <p className="instruction-text">
              Enter your email address to continue. We'll send you a
              verification link.
            </p>
            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                placeholder="Your Email Address"
                onChange={handleChange}
                required
              />
              <button type="submit" className="primary-btn">
                Next Step
              </button>
            </form>
          </>
        );

      case 3:
        return (
          <>
            <p className="instruction-text">
              Create a strong password for your Dharura account.
            </p>
            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="password"
                placeholder="Create Password"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
              <button type="submit" className="create-account-btn">
                Create Account
              </button>
            </form>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="account-creation-section">
      <h3>Create Your Dharura Account</h3>
      {renderStepContent()}
    </div>
  );
};

export default AccountCreationSection;
