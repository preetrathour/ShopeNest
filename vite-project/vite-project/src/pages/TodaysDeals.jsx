// src/pages/TodaysDeals.jsx
import "./Todaydeal.css";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const dealsData = [
  {
    id: 201,
    title: "Apple Watch Series 9 GPS 45mm",
    category: "Lightning Deal",
    dealPrice: "₹38,900",
    originalPrice: "₹44,900",
    discount: "13% OFF",
    claimed: 85,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    endsInMinutes: 45,
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
    endsInMinutes: 180,
  },
  {
    id: 203,
    title: 'ASUS ROG Strix Gaming Laptop 16"',
    category: "Top Deal",
    dealPrice: "₹1,14,990",
    originalPrice: "₹1,49,900",
    discount: "23% OFF",
    claimed: 40,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    endsInMinutes: 240,
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
    endsInMinutes: 15,
  },
  {
    id: 205,
    title: 'Samsung 55" Crystal 4K UHD Smart TV',
    category: "Deal of the Day",
    dealPrice: "₹42,990",
    originalPrice: "₹64,900",
    discount: "34% OFF",
    claimed: 78,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
    endsInMinutes: 300,
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
    endsInMinutes: 120,
  },
];

// label = what the shopper sees, value = the category string used in dealsData
const filters = [
  { label: "All deals", value: "All" },
  { label: "Lightning deals", value: "Lightning Deal" },
  { label: "Deal of the day", value: "Deal of the Day" },
  { label: "Top deals", value: "Top Deal" },
];

function formatEnds(minutes) {
  if (minutes < 60) return `Ends in ${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `Ends in ${h}h ${m}m` : `Ends in ${h}h`;
}

function DealCard({ deal }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: deal.id,
      title: deal.title,
      price: deal.dealPrice,
      image: deal.image,
      rating: 4.8,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const almostGone = deal.claimed > 80;

  return (
    <article className="deal-card">
      <div className="deal-card__media">
        <span className="deal-card__badge">{deal.discount}</span>
        <img src={deal.image} alt={deal.title} loading="lazy" />
      </div>

      <div className="deal-card__body">
        <div className="deal-card__meta">
          <span className="deal-card__category">{deal.category}</span>
          <span className="deal-card__timer">{formatEnds(deal.endsInMinutes)}</span>
        </div>

        <h3 className="deal-card__title">{deal.title}</h3>

        <div className="deal-card__prices">
          <span className="deal-card__price">{deal.dealPrice}</span>
          <s className="deal-card__old-price">{deal.originalPrice}</s>
        </div>

        <div className="deal-card__claimed">
          <div
            className="deal-card__bar"
            role="progressbar"
            aria-valuenow={deal.claimed}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`${deal.claimed}% claimed`}
          >
            <div
              className={`deal-card__bar-fill${almostGone ? " is-hot" : ""}`}
              style={{ width: `${deal.claimed}%` }}
            />
          </div>
          <span className="deal-card__claimed-text">
            {almostGone ? `Almost gone, ${deal.claimed}% claimed` : `${deal.claimed}% claimed`}
          </span>
        </div>

        <button
          type="button"
          className={`deal-card__btn${isAdded ? " is-added" : ""}`}
          onClick={handleAdd}
        >
          {isAdded ? "✓ Added to cart" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

function TodaysDeals() {
  const [selected, setSelected] = useState("All");

  const visibleDeals =
    selected === "All"
      ? dealsData
      : dealsData.filter((d) => d.category === selected);

  const countFor = (value) =>
    value === "All" ? dealsData.length : dealsData.filter((d) => d.category === value).length;

  return (
    <section id="todays-deals">
      <header id="deals-header">
        <h1 id="deals-title">Today's deals</h1>
        <p id="deals-subtitle">
          Big savings on thousands of items. Quantities are limited, so grab yours early.
        </p>
      </header>

      <div id="deal-filters" role="group" aria-label="Filter deals">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`deal-chip${selected === f.value ? " is-active" : ""}`}
            aria-pressed={selected === f.value}
            onClick={() => setSelected(f.value)}
          >
            {f.label}
            <span className="deal-chip__count">{countFor(f.value)}</span>
          </button>
        ))}
      </div>

      <div id="deals-grid">
        {visibleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}

export default TodaysDeals;