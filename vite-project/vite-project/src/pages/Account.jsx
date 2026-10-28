// src/pages/AccountSetup.jsx
import React, { useState } from "react";
import "./Account.css";

function AccountSetup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "prefer-not-to-say"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Account Data:", formData);
    alert("Account settings saved!");
  };

  const initials = formData.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <main className="account-page">
      <section className="account-card">
        <header className="account-header">
          <div className="account-avatar" aria-hidden="true">
            {initials || "?"}
          </div>
          <div>
            <h1 className="account-title">Account Setup</h1>
            <p className="account-subtitle">Update your personal details below.</p>
          </div>
        </header>

        <form className="account-form" onSubmit={handleSubmit}>
          <div className="form-field form-field--full">
            <label className="form-label" htmlFor="name">
              Full name
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phone">
              Phone number <span className="form-optional">(optional)</span>
            </label>
            <input
              className="form-input"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 123 456 7890"
              autoComplete="tel"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select
              className="form-input form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div className="form-actions">
            <button className="btn btn-primary" type="submit">
              Save changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AccountSetup;