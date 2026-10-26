// src/pages/Flights.jsx
import React, { useState } from "react";
import "./Flights.css";

const featuredFlights = [
  { id: 1, from: "New Delhi (DEL)", to: "Mumbai (BOM)", airline: "IndiGo", price: "₹4,299", duration: "2h 15m" },
  { id: 2, from: "Bengaluru (BLR)", to: "Goa (GOI)", airline: "Air India Express", price: "₹2,899", duration: "1h 10m" },
  { id: 3, from: "Mumbai (BOM)", to: "Dubai (DXB)", airline: "Emirates", price: "₹18,499", duration: "3h 30m" },
  { id: 4, from: "Kolkata (CCU)", to: "Bangkok (BKK)", airline: "SpiceJet", price: "₹12,999", duration: "2h 45m" }
];

function Flights() {
  const [tripType, setTripType] = useState("oneWay");

  return (
    <div className="flights-container">
      <div className="flights-header">
        <h1>Flight Bookings</h1>
        <p>Book domestic and international flights with zero convenience fees.</p>
      </div>

      {/* Flight Search Widget */}
      <div className="booking-card">
        <div className="trip-type">
          <label>
            <input 
              type="radio" 
              name="trip" 
              value="oneWay" 
              checked={tripType === "oneWay"} 
              onChange={() => setTripType("oneWay")} 
            />
            One Way
          </label>
          <label>
            <input 
              type="radio" 
              name="trip" 
              value="roundTrip" 
              checked={tripType === "roundTrip"} 
              onChange={() => setTripType("roundTrip")} 
            />
            Round Trip
          </label>
        </div>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>From</label>
            <input type="text" placeholder="Departure City or Airport" defaultValue="New Delhi (DEL)" />
          </div>

          <div className="input-group">
            <label>To</label>
            <input type="text" placeholder="Destination City or Airport" defaultValue="Mumbai (BOM)" />
          </div>

          <div className="input-group">
            <label>Departure Date</label>
            <input type="date" />
          </div>

          {tripType === "roundTrip" && (
            <div className="input-group">
              <label>Return Date</label>
              <input type="date" />
            </div>
          )}

          <div className="input-group">
            <label>Travellers & Class</label>
            <select>
              <option>1 Adult, Economy</option>
              <option>2 Adults, Economy</option>
              <option>1 Adult, Business</option>
            </select>
          </div>

          <button className="search-flights-btn">Search Flights</button>
        </form>
      </div>

      {/* Featured Route Deals */}
      <h2 style={{ fontSize: "1.4rem", marginBottom: "16px" }}>Popular Flight Deals</h2>
      <div className="flights-grid">
        {featuredFlights.map((flight) => (
          <div key={flight.id} className="flight-deal-card">
            <div>
              <div className="flight-route">
                <span>{flight.from.split(" ")[0]}</span>
                <span>➔</span>
                <span>{flight.to.split(" ")[0]}</span>
              </div>
              <div className="airline-name">{flight.airline} • {flight.duration}</div>
            </div>

            <div className="flight-bottom">
              <span className="flight-price">{flight.price}</span>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flights;