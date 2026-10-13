// src/components/cart.jsx
function Cart({ title, items = [] }) {
  return (
    <section className="cart-section">
      {title && <h2 className="section-title">{title}</h2>}
       
      <div className="cart">
        {items.map((item, index) => (
          item.type === "video" ? (
            <video 
              key={index} 
              src={item.url} 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
          ) : (
            <img 
              key={index} 
              src={item.url} 
              alt={item.alt || `Product ${index + 1}`} 
            />
          )
        ))}
      </div>
    </section>
  );
}

export default Cart;