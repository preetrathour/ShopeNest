import React from 'react';
import "./cart.css";

import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart
  } = useCart();

  // Calculate subtotal
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      // Strips non-numeric characters (e.g. ₹ or commas) for precise calculation
      const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
      return acc + numericPrice * (item.quantity || 1);
    }, 0);
  };

  const total = calculateTotal();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-empty-card">
          <div className="cart-empty-icon">🛒</div>
          <h1>Your Shopping Cart is Empty</h1>
          <p>Your shopping cart is currently empty. Start exploring deals and add products to fill it up!</p>
          <a href="/" className="cart-shop-now-btn">Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</h1>
      
      <div className="cart-content-layout">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <span className="cart-item-price">{item.price}</span>
                
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantityQuantity(item.id, (item.quantity || 1) + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button 
                    className="cart-remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Box */}
        <div className="cart-summary-card">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items ({cartItems.length}):</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Delivery:</span>
            <span className="free-delivery">FREE</span>
          </div>
          <hr />
          <div className="summary-row summary-total">
            <span>Order Total:</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
          <button className="cart-checkout-btn">Proceed to Buy</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;