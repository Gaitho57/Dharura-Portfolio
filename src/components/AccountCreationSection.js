// AccountCreationSection.js
import React, { useState } from "react";
import styles from "./AccountCreationSection.css";

const AccountCreationSection = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError("");
    switch (name) {
      case "email":
        setEmail(value);
        // Additional email validation can be added here
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const calculatePasswordStrength = (password) => {
    // Implement password strength calculation logic
    // Return a value between 0 and 100 based on the strength
    return 0; // Placeholder value
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const strength = calculatePasswordStrength(newPassword);
    setPasswordStrength(strength);
    handleChange(event);
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic
  };

  const handleRememberMeChange = () => {
    // Implement logic for handling "Remember me" checkbox state
  };

  const handleTermsConditionsClick = () => {
    // Implement logic to show terms and conditions
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate an asynchronous operation (e.g., API request)
    try {
      // Your registration logic goes here
      // Simulate success after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep(step + 1); // Move to the next step upon successful registration
    } catch (error) {
      // Handle registration error
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { step: 1, label: "Welcome", tooltip: "Welcome to Dharura!" },
    { step: 2, label: "Email", tooltip: "Enter your email to continue." },
    { step: 3, label: "Password", tooltip: "Create a strong password." },
  ];

  const renderStepContent = () => {
    return (
      <>
        <p className="instruction-text">{getInstructionText()}</p>
        <form onSubmit={handleFormSubmit} className="signup-form" role="form">
          {getFormContent()}
          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="primary-btn" role="button">
            {getButtonLabel()}
          </button>
        </form>
      </>
    );
  };

  const getInstructionText = () => {
    return steps.find((s) => s.step === step)?.tooltip || "";
  };

  const getFormContent = () => {
    switch (step) {
      case 2:
        return (
          <input
            type="email"
            placeholder="Your Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        );
      case 3:
        return (
          <>
            <input
              type="password"
              placeholder="Create Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              aria-required="true"
            />
            {passwordStrength > 0 && (
              <p className="password-strength">
                Password Strength: {passwordStrength}%
              </p>
            )}
          </>
        );
      default:
        return null;
    }
  };

  const getButtonLabel = () => {
    return step === 3 ? "Create Account" : "Next Step";
  };

  return (
    <div className="account-creation-section">
      <div className="step-progress" role="navigation">
        {steps.map((stepInfo) => (
          <div
            key={stepInfo.step}
            className={`step-dot ${stepInfo.step === step ? "active" : ""}`}
            aria-label={stepInfo.label}
            role="button"
            tabIndex={0}
            onClick={() => setStep(stepInfo.step)}
          >
            <span className="tooltip">{stepInfo.tooltip}</span>
          </div>
        ))}
      </div>
      {renderStepContent()}
    </div>
  );
};

export default AccountCreationSection;
