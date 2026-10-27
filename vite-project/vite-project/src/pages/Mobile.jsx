// src/pages/Mobile.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Mobile.css";


export const mobileProducts = [
  {
    id: 101,
    title: "iPhone 15 Pro (128 GB) - Natural Titanium",
    brand: "Apple",
    price: "₹1,27,990",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    specs: '15.5 cm (6.1") Super Retina XDR, A17 Pro Chip',
  },
  {
    id: 102,
    title: "Samsung Galaxy S24 Ultra 5G (Titanium Gray)",
    brand: "Samsung",
    price: "₹1,29,999",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    specs: "200MP Camera, S Pen Included, Snapdragon 8 Gen 3",
  },
  {
    id: 103,
    title: "OnePlus 12 5G (Flowy Emerald, 16GB RAM)",
    brand: "OnePlus",
    price: "₹64,999",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    specs: "Snapdragon 8 Gen 3, 5400 mAh Battery, 100W Charging",
  },
  {
    id: 104,
    title: "Google Pixel 8 Pro (Bay Blue, 128 GB)",
    brand: "Google",
    price: "₹98,999",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    specs: "Google Tensor G3, Best-in-class AI Camera, 120Hz OLED",
  },
  {
    id: 105,
    title: "Nothing Phone (2) 5G (Dark Grey, 256 GB)",
    brand: "Nothing",
    price: "₹36,999",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500",
    specs: "Glyph Interface, Snapdragon 8+ Gen 1, 50MP Dual Cam",
  },
  {
    id: 106,
    title: "Xiaomi 14 5G (Jade Green, 512 GB)",
    brand: "Xiaomi",
    price: "₹69,999",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500",
    specs: "Leica Summilux Lens, Snapdragon 8 Gen 3, 90W HyperCharge",
  },
];

const brands = ["All", "Apple", "Samsung", "OnePlus", "Google", "Nothing", "Xiaomi"];

function MobileCard({ phone }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(phone);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  // "A, B, C" -> ["A", "B", "C"] so each spec becomes its own tag
  const specTags = phone.specs.split(", ");

  return (
    <article className="mb-card">
      <div className="mb-card__media">
        <span className="mb-card__brand">{phone.brand}</span>
        <img src={phone.image} alt={phone.title} loading="lazy" />
      </div>

      <div className="mb-card__body">
        <h3 className="mb-card__title">{phone.title}</h3>

        <ul className="mb-card__specs">
          {specTags.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="mb-card__info">
          <span className="mb-card__price">{phone.price}</span>
          <span className="mb-card__rating" aria-label={`Rated ${phone.rating} out of 5`}>
            ★ {phone.rating}
          </span>
        </div>

        <button
          type="button"
          className={`mb-card__btn${isAdded ? " is-added" : ""}`}
          onClick={handleAdd}
        >
          {isAdded ? "✓ Added to cart" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

function Mobile() {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredMobiles =
    selectedBrand === "All"
      ? mobileProducts
      : mobileProducts.filter((p) => p.brand === selectedBrand);

  const countFor = (brand) =>
    brand === "All"
      ? mobileProducts.length
      : mobileProducts.filter((p) => p.brand === brand).length;

  return (
    <section id="mobile-page">
      <header id="mobile-header">
        <h1 id="mobile-title">Mobile phones & accessories</h1>
        <p id="mobile-subtitle">
          Top smartphones with festival discounts and fast delivery.
        </p>
      </header>

      <div id="brand-filters" role="group" aria-label="Filter by brand">
        {brands.map((brand) => (
          <button
            key={brand}
            type="button"
            className={`mb-chip${selectedBrand === brand ? " is-active" : ""}`}
            aria-pressed={selectedBrand === brand}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
            <span className="mb-chip__count">{countFor(brand)}</span>
          </button>
        ))}
      </div>

      <p id="mobile-result-count" aria-live="polite">
        Showing {filteredMobiles.length} {filteredMobiles.length === 1 ? "phone" : "phones"}
      </p>

      <div id="mobile-grid">
        {filteredMobiles.map((phone) => (
          <MobileCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  );
}

export default Mobile;