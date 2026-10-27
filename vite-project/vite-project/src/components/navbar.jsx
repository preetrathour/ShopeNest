import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const links = [
  { to: "/electronics", label: "Electronics" },
  { to: "/mobile", label: "Mobiles" },
];

function Navbar({ cartCount = 0 }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const q = query.trim();

    if (!q) return;

    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const linkClass = ({ isActive }) =>
    "sn-nav__link" + (isActive ? " is-active" : "");

  return (
    <header className="sn-nav">
      <div className="sn-nav__inner">
        <Link to="/" className="sn-nav__logo" aria-label="ShopNest home">
          shop<span>Nest</span>
        </Link>

        {/* Search box */}
        <form
          className="sn-nav__search"
          role="search"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            placeholder="Search for products, brands and more"
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit" aria-label="Search">
            <Icon>
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </Icon>
          </button>
        </form>

        <nav className="sn-nav__links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}

          <NavLink to="/account" className={linkClass}>
            <Icon>
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </Icon>
            <span>Account</span>
          </NavLink>

          <NavLink to="/orders" className={linkClass}>
            <Icon>
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </Icon>
            <span>Orders</span>
          </NavLink>

          <NavLink to="/cart" className={linkClass}>
            <span className="sn-nav__cart">
              <Icon>
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </Icon>

              {cartCount > 0 && (
                <b
                  className="sn-nav__badge"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </b>
              )}
            </span>

            <span>Cart</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;