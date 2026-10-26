import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { mobileProducts } from "./Mobile";
import { electronicsProducts } from "./Electronics";
// import products from "../data/Products";
import "./SearchResult.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();

  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const allProducts = [
    ...products,

    ...mobileProducts.map((product) => ({
      ...product,
      category: product.category || "Mobiles",
      description: product.description || product.specs || "",
    })),

    ...electronicsProducts.map((product) => ({
      ...product,
      category: product.category || "Electronics",
      brand: product.brand || "",
      description: product.description || product.specs || "",
    })),
  ];

  const results = query
    ? allProducts.filter((product) => {
        const searchableText = [
          product.title,
          product.brand,
          product.category,
          product.specs,
          product.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      })
    : [];

  return (
    <main className="global-search-page">
      <div className="global-search-header">
        <div>
          <h1>Search Results</h1>
          <p>
            {query
              ? `Results for "${query}"`
              : "Search for your favourite products"}
          </p>
        </div>

        <Link to="/" className="search-back-link">
          ← Back to Home
        </Link>
      </div>

      {query && (
        <p className="global-search-count">
          {results.length} product(s) found
        </p>
      )}

      {!query ? (
        <div className="search-empty">
          <h2>What are you looking for?</h2>
          <p>Try searching for iPhone, Samsung, Laptop, or Headphones.</p>
          <Link to="/" className="search-home-button">
            Browse Products
          </Link>
        </div>
      ) : results.length > 0 ? (
        <div className="global-search-grid">
          {results.map((product, index) => (
            <article
              className="global-search-card"
              key={`${product.id}-${index}`}
            >
              <div className="global-search-image">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="global-search-details">
                <span className="global-search-category">
                  {product.category || "Product"}
                </span>

                <h3>{product.title}</h3>

                {product.description && (
                  <p className="global-search-description">
                    {product.description}
                  </p>
                )}

                <div className="global-search-meta">
                  <span className="global-search-price">
                    {typeof product.price === "number"
                      ? `₹${product.price.toLocaleString("en-IN")}`
                      : product.price}
                  </span>

                  {product.rating != null && (
                    <span className="global-search-rating">
                      ★ {product.rating}
                    </span>
                  )}
                </div>

                <button
                  className="global-search-add-button"
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="search-empty">
          <h2>No matching products found</h2>
          <p>
            Try another keyword, such as iPhone, Samsung, Laptop,
            Electronics, or Headphones.
          </p>
          <Link to="/" className="search-home-button">
            View All Products
          </Link>
        </div>
      )}
    </main>
  );
}

export default SearchResults;