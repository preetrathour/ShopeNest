import React from "react";
import "./AmazonPay.css";

function AmazonPay() {
  const quickActions = [
    { id: 1, title: "Scan & Pay", icon: "📱" },
    { id: 2, title: "Send Money", icon: "💸" },
    { id: 3, title: "Approve Payment", icon: "✅" },
    { id: 4, title: "Pay Bills", icon: "🧾" },
  ];

  const rechargesAndBills = [
    { id: 1, name: "Mobile Recharge", icon: "📲" },
    { id: 2, name: "Electricity", icon: "💡" },
    { id: 3, name: "DTH", icon: "📺" },
    { id: 4, name: "Credit Card Bill", icon: "💳" },
    { id: 5, name: "LPG Cylinder", icon: "🔥" },
    { id: 6, name: "Google Play", icon: "🎮" },
    { id: 7, name: "Broadband", icon: "🌐" },
    { id: 8, name: "See More", icon: "➕" },
  ];

  const offers = [
    {
      id: 1,
      title: "Flat ₹50 Cashback",
      desc: "On first Mobile Recharge of the month",
      code: "PAY50",
      bg: "#e3f2fd",
    },
    {
      id: 2,
      title: "Win up to ₹1000",
      desc: "Send ₹50 or more to any UPI ID",
      code: "UPIWIN",
      bg: "#fff3e0",
    },
    {
      id: 3,
      title: "10% Instant Off",
      desc: "On Electricity Bill payments via Amazon Pay ICICI",
      code: "LIGHT10",
      bg: "#e8f5e9",
    },
  ];

  return (
    <div className="pay-container">
      {/* 1. Header Banner & Balance Summary */}
      <div className="pay-header">
        <div className="balance-card">
          <div className="balance-info">
            <span className="label">Amazon Pay Balance</span>
            <h2 className="amount">₹1,250.00</h2>
          </div>
          <button className="add-money-btn">+ Add Money</button>
        </div>

        <div className="balance-card">
          <div className="balance-info">
            <span className="label">Amazon Pay UPI</span>
            <p className="upi-id">user@apl</p>
          </div>
          <button className="secondary-btn">Manage UPI</button>
        </div>

        <div className="balance-card rewards-card">
          <div className="balance-info">
            <span className="label">Rewards Earned</span>
            <h2 className="amount">₹480.00</h2>
          </div>
          <button className="secondary-btn">View Scratch Cards</button>
        </div>
      </div>

      {/* 2. Quick Action Buttons */}
      <section className="pay-section">
        <h3 className="section-heading">Quick Pay & Send</h3>
        <div className="quick-grid">
          {quickActions.map((action) => (
            <div key={action.id} className="quick-item">
              <div className="quick-icon">{action.icon}</div>
              <span>{action.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Recharges & Bill Payments Grid */}
      <section className="pay-section">
        <h3 className="section-heading">Recharge & Pay Bills</h3>
        <div className="services-grid">
          {rechargesAndBills.map((item) => (
            <div key={item.id} className="service-card">
              <div className="service-icon">{item.icon}</div>
              <p className="service-name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Promotional Cashback Offers */}
      <section className="pay-section">
        <h3 className="section-heading">Deals & Cashback Offers</h3>
        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card" style={{ backgroundColor: offer.bg }}>
              <h4>{offer.title}</h4>
              <p>{offer.desc}</p>
              <span className="offer-badge">Use Code: {offer.code}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AmazonPay;