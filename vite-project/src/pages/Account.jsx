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

  return (
    <div>
      <header>
        <h1>Account Setup</h1>
        <p>Update your personal details below.</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="phone">Phone Number</label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 123 456 7890"
          />
        </div>

        <br />

        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          <select
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

        <br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default AccountSetup;