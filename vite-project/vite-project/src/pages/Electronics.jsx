// src/pages/Electronics.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Electronics.css";

export const electronicsProducts = [
  {
    id: 301,
    title: "MacBook Air M2 (13.6-inch, 8GB RAM, 256GB SSD)",
    category: "Laptops",
    price: "₹99,900",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    specs: "Liquid Retina Display, Silent Fanless Design"
  },
  {
    id: 302,
    title: "Sony WH-1000XM5 Wireless Headphones",
    category: "Audio",
    price: "₹29,990",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    specs: "Industry Leading Noise Cancellation, 30hr Battery"
  },
  {
    id: 303,
    title: "Apple iPad Air 11-inch (M2 Chip, 128GB)",
    category: "Tablets",
    price: "₹59,900",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    specs: "Liquid Retina Display, Apple Pencil Pro Support"
  },
  {
    id: 304,
    title: "Samsung Odyssey G7 32\" Curved Gaming Monitor",
    category: "Monitors",
    price: "₹49,999",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    specs: "240Hz Refresh Rate, 1ms Response Time, QLED"
  }
];

function ElectronicsCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="elec-card">
      <div>
        <img src={product.image} alt={product.title} />
        <h3 className="elec-title">{product.title}</h3>
        <p className="elec-specs">{product.specs}</p>
      </div>

      <div>
        <div className="elec-info">
          <span className="elec-price">{product.price}</span>
          <span className="elec-rating">★ {product.rating}</span>
        </div>

        <button 
          className={`elec-add-btn ${isAdded ? "added" : ""}`} 
          onClick={handleAdd}
        >
          {isAdded ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

function Electronics() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Laptops", "Audio", "Tablets", "Monitors"];

  const filteredProducts = selectedCategory === "All"
    ? electronicsProducts
    : electronicsProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="electronics-container">
      <div className="electronics-header">
        <h1>Electronics Store</h1>
        <p>Shop top laptops, audio, tablets, and computing accessories.</p>
      </div>

      <div className="electronics-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`elec-category-btn ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="electronics-grid">
        {filteredProducts.map((product) => (
          <ElectronicsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Electronics;