import React from "react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE = "/banners/placeholder.svg";
function Cart({ id, title, items = [] }) {
  return (
    <section id={id} className="banner-section">
      {title && <h2 className="banner-section__title">{title}</h2>}

      <div className="banner-row">
        {items.map((item, index) => {
          const media =
            item.type === "video" ? (
              <video
                src={item.url}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <img
                src={item.url}
                alt={item.alt || `Banner ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            );

          const caption = item.alt ? (
            <span className="banner-item__label">{item.alt}</span>
          ) : null;

          return item.to ? (
            <Link
              key={item.url || index}
              to={item.to}
              className="banner-item"
              aria-label={item.alt}
            >
              {media}
              {caption}
            </Link>
          ) : (
            <div key={item.url || index} className="banner-item">
              {media}
              {caption}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Cart;