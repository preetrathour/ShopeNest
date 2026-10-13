// src/pages/Mobile.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Mobile.css";


// Mobile Products Dataset
const mobileProducts = [
  {
    id: 101,
    title: "iPhone 15 Pro (128 GB) - Natural Titanium",
    brand: "Apple",
    price: "₹1,27,990",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    specs: "15.5 cm (6.1\") Super Retina XDR, A17 Pro Chip"
  },
  {
    id: 102,
    title: "Samsung Galaxy S24 Ultra 5G (Titanium Gray)",
    brand: "Samsung",
    price: "₹1,29,999",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    specs: "200MP Camera, S Pen Included, Snapdragon 8 Gen 3"
  },
  {
    id: 103,
    title: "OnePlus 12 5G (Flowy Emerald, 16GB RAM)",
    brand: "OnePlus",
    price: "₹64,999",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    specs: "Snapdragon 8 Gen 3, 5400 mAh Battery, 100W Charging"
  },
  {
    id: 104,
    title: "Google Pixel 8 Pro (Bay Blue, 128 GB)",
    brand: "Google",
    price: "₹98,999",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    specs: "Google Tensor G3, Best-in-class AI Camera, 120Hz OLED"
  },
  {
    id: 105,
    title: "Nothing Phone (2) 5G (Dark Grey, 256 GB)",
    brand: "Nothing",
    price: "₹36,999",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500",
    specs: "Glyph Interface, Snapdragon 8+ Gen 1, 50MP Dual Cam"
  },
  {
    id: 106,
    title: "Xiaomi 14 5G (Jade Green, 512 GB)",
    brand: "Xiaomi",
    price: "₹69,999",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500",
    specs: "Leica Summilux Lens, Snapdragon 8 Gen 3, 90W HyperCharge"
  }
];

function MobileCard({ phone }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(phone);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <img src={phone.image} alt={phone.title} />
      <h3>{phone.title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#565959', margin: '4px 0 8px' }}>
        {phone.specs}
      </p>
      <div className="product-info">
        <span className="product-price">{phone.price}</span>
        <span className="product-rating">★ {phone.rating}</span>
      </div>
      <button 
        className={`product-btn ${isAdded ? 'added' : ''}`} 
        onClick={handleAdd}
      >
        {isAdded ? '✓ Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

function Mobile() {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const brands = ['All', 'Apple', 'Samsung', 'OnePlus', 'Google', 'Nothing', 'Xiaomi'];

  const filteredMobiles = selectedBrand === 'All' 
    ? mobileProducts 
    : mobileProducts.filter((p) => p.brand === selectedBrand);

  return (
    <div className="product-section">
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>
        Mobile Phones & Accessories
      </h1>
      <p style={{ color: '#565959', marginBottom: '24px' }}>
        Explore top smartphones with exclusive festival discounts and fast delivery.
      </p>

      {/* Brand Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #d5d9d9',
              backgroundColor: selectedBrand === brand ? 'var(--accent-color)' : '#ffffff',
              color: 'var(--text-dark)',
              fontWeight: selectedBrand === brand ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Mobiles Grid */}
      <div className="product-grid">
        {filteredMobiles.map((phone) => (
          <MobileCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default Mobile;