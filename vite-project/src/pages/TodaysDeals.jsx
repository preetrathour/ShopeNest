import "./Todaydeal.css";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const dealsData = [
  {
    id: 201,
    title: "Apple Watch Series 9 GPS 45mm",
    category: "Lightning Deal",
    dealPrice: "₹38,900",
    originalPrice: "₹44,900",
    discount: "13% OFF",
    claimed: 85, // percentage claimed
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    endsInMinutes: 45
  },
  {
    id: 202,
    title: "Sony WH-1000XM5 Wireless Headphones",
    category: "Deal of the Day",
    dealPrice: "₹24,990",
    originalPrice: "₹34,990",
    discount: "29% OFF",
    claimed: 62,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    endsInMinutes: 180
  },
  {
    id: 203,
    title: "ASUS ROG Strix Gaming Laptop 16\"",
    category: "Top Deal",
    dealPrice: "₹1,14,990",
    originalPrice: "₹1,49,900",
    discount: "23% OFF",
    claimed: 40,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    endsInMinutes: 240
  },
  {
    id: 204,
    title: "Instant Pot Duo 7-in-1 Pressure Cooker",
    category: "Lightning Deal",
    dealPrice: "₹6,499",
    originalPrice: "₹11,999",
    discount: "46% OFF",
    claimed: 92,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500",
    endsInMinutes: 15
  },
  {
    id: 205,
    title: "Samsung 55\" Crystal 4K UHD Smart TV",
    category: "Deal of the Day",
    dealPrice: "₹42,990",
    originalPrice: "₹64,900",
    discount: "34% OFF",
    claimed: 78,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
    endsInMinutes: 300
  },
  {
    id: 206,
    title: "Logitech MX Master 3S Wireless Mouse",
    category: "Top Deal",
    dealPrice: "₹8,495",
    originalPrice: "₹10,995",
    discount: "23% OFF",
    claimed: 55,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    endsInMinutes: 120
  }
];

function DealCard({ deal }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Map deal item structure to match cart expectation
  const handleAdd = () => {
    addToCart({
      id: deal.id,
      title: deal.title,
      price: deal.dealPrice,
      image: deal.image,
      rating: 4.8
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="product-card" style={{ position: "relative" }}>
      {/* Discount Badge */}
      <span
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "#CC0C39",
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: "0.75rem",
          padding: "4px 8px",
          borderRadius: "4px",
          zIndex: 1
        }}
      >
        {deal.discount}
      </span>

      <img src={deal.image} alt={deal.title} />

      <span
        style={{
          fontSize: "0.8rem",
          color: "#CC0C39",
          fontWeight: "600",
          marginTop: "8px",
          display: "inline-block"
        }}
      >
        {deal.category}
      </span>

      <h3>{deal.title}</h3>

      {/* Price Section */}
      <div className="product-info" style={{ alignItems: "baseline" }}>
        <span className="product-price">{deal.dealPrice}</span>
        <span
          style={{
            textDecoration: "line-through",
            color: "#565959",
            fontSize: "0.85rem",
            marginLeft: "6px"
          }}
        >
          {deal.originalPrice}
        </span>
      </div>

      {/* Claimed Progress Bar */}
      <div style={{ margin: "10px 0 14px" }}>
        <div
          style={{
            height: "6px",
            width: "100%",
            backgroundColor: "#e7e7e7",
            borderRadius: "3px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${deal.claimed}%`,
              backgroundColor: deal.claimed > 80 ? "#CC0C39" : "#febd69"
            }}
          />
        </div>
        <span style={{ fontSize: "0.75rem", color: "#565959" }}>
          {deal.claimed}% claimed
        </span>
      </div>

      <button
        className={`product-btn ${isAdded ? "added" : ""}`}
        onClick={handleAdd}
      >
        {isAdded ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  );
}

function TodaysDeals() {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");

  const categories = ["All Deals", "Lightning Deals", "Deal of the Day", "Top Deals"];

  const filteredDeals =
    selectedCategory === "All Deals"
      ? dealsData
      : dealsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="product-section">
      <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "12px", marginBottom: "20px" }}>
        <h1 className="section-title" style={{ fontSize: "2rem", marginBottom: "6px", textAlign:"center" }}>
          Today's Deals
        </h1>
        <p style={{ color: "#565959" }}>
          Great savings on over thousands of items. Limited quantities available!
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 18px",
              borderRadius: "20px",
              border: "1px solid #d5d9d9",
              backgroundColor: selectedCategory === cat ? "#febd69" : "#ffffff",
              color: "#111111",
              fontWeight: selectedCategory === cat ? "bold" : "normal",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      <div className="product-grid">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
}

export default TodaysDeals;