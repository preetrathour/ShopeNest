// src/pages/Coupons.jsx
import React, { useState } from "react";
import "./coupons.css";

const couponList = [
  {
    id: 1,
    code: "WELCOME100",
    discount: "₹100 OFF",
    minSpend: "Min. spend ₹500",
    category: "Electronics",
    description: "Get ₹100 instant discount on your first electronics purchase.",
    expiry: "Expires in 3 days"
  },
  {
    id: 2,
    code: "FESTIVE20",
    discount: "20% OFF",
    minSpend: "Min. spend ₹1,999",
    category: "Mobiles",
    description: "Extra 20% off on selected mobile phones and accessories.",
    expiry: "Expires in 5 days"
  },
  {
    id: 3,
    code: "FREESHIP",
    discount: "FREE Delivery",
    minSpend: "No min. spend",
    category: "All Items",
    description: "Enjoy zero delivery charges on your next order with no minimum spend.",
    expiry: "Expires in 7 days"
  },
  {
    id: 4,
    code: "FASHION500",
    discount: "₹500 OFF",
    minSpend: "Min. spend ₹2,499",
    category: "Fashion",
    description: "Flat ₹500 discount on top apparel, shoes, and lifestyle brands.",
    expiry: "Expires tomorrow"
  },
  {
    id: 5,
    code: "PAY10",
    discount: "10% Cashback",
    minSpend: "Min. spend ₹1,000",
    category: "Amazon Pay",
    description: "Earn 10% instant cashback directly into your Amazon Pay balance.",
    expiry: "Expires in 4 days"
  },
  {
    id: 6,
    code: "SUPERDEAL",
    discount: "₹250 OFF",
    minSpend: "Min. spend ₹1,200",
    category: "Home & Kitchen",
    description: "Save big on kitchen appliances, cookware, and home essentials.",
    expiry: "Expires in 6 days"
  }
];

function CouponCard({ coupon }) {
  const [copied, setCopied] = useState(false);
  const [collected, setCollected] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="coupon-card">
      <div>
        <div className="coupon-top">
          <span className="coupon-badge">{coupon.category}</span>
          <span className="coupon-expiry">{coupon.expiry}</span>
        </div>

        <h2 className="coupon-discount">{coupon.discount}</h2>
        <p className="coupon-minspend">{coupon.minSpend}</p>
        <p className="coupon-description">{coupon.description}</p>
      </div>

      <div>
        <div className="code-box">
          <span className="code-text">{coupon.code}</span>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "✓ Copied" : "Copy Code"}
          </button>
        </div>

        <button
          className={`collect-btn ${collected ? "collected" : ""}`}
          onClick={() => setCollected(!collected)}
        >
          {collected ? "✓ Coupon Collected" : "Collect Coupon"}
        </button>
      </div>
    </div>
  );
}

function Coupons() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Mobiles", "Fashion", "Amazon Pay", "Home & Kitchen"];

  const filteredCoupons =
    selectedCategory === "All"
      ? couponList
      : couponList.filter((item) => item.category === selectedCategory);

  return (
    <div className="coupons-container">
      <div className="coupons-header">
        <h1>Coupons & Savings Central</h1>
        <p>Collect coupons and apply codes at checkout to unlock extra discounts on your shopping.</p>
      </div>

      <div className="coupons-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="coupons-grid">
        {filteredCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </div>
  );
}

export default Coupons;