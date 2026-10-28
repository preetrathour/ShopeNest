// src/components/ProductList.jsx
import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);

    // Reset button text after 1.5 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 4500);
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="product-info">
        <span className="product-price">{product.price}</span>
        <span className="product-rating">★ {product.rating}</span>
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

function ProductList({ title, products, onAddToCart }) {
  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;