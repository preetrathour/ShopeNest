
import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const getNumericPrice = (price) =>
    Number(String(price).replace(/[₹,\s]/g, "")) || 0;

  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      getNumericPrice(item.price) * (item.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-empty-card">
          <div className="cart-empty-icon">🛒</div>

          <h1>Your Shopping Cart is Empty</h1>

          <p>
            Your shopping cart is currently empty.
            Start exploring products and add some items!
          </p>

          <Link to="/" className="cart-shop-now-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">
        Shopping Cart ({totalItems}{" "}
        {totalItems === 1 ? "item" : "items"})
      </h1>

      <div className="cart-content-layout">
        <div className="cart-items-list">
          {cartItems.map((item) => {
            const quantity = item.quantity || 1;
            const price = getNumericPrice(item.price);

            return (
              <div key={item.id} className="cart-item-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h3>{item.title}</h3>

                  <span className="cart-item-price">
                    {item.price}
                  </span>

                  <p>
                    Item total: ₹
                    {(price * quantity).toLocaleString("en-IN")}
                  </p>

                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.title} quantity`}
                        onClick={() =>
                          updateQuantity(item.id, quantity - 1)
                        }
                        disabled={quantity <= 1}
                      >
                        −
                      </button>

                      <span>{quantity}</span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.title} quantity`}
                        onClick={() =>
                          updateQuantity(item.id, quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="cart-summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items ({totalItems}):</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>

          <div className="summary-row">
            <span>Delivery:</span>
            <span className="free-delivery">FREE</span>
          </div>

          <hr />

          <div className="summary-row summary-total">
            <span>Order Total:</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>

          <button
            type="button"
            className="cart-checkout-btn"
            onClick={() =>
              alert("Checkout functionality is not connected yet.")
            }
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
