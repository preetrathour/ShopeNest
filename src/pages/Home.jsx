
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Shoping from "../components/Shoping";
import "./Home.css";

const FALLBACK_IMAGE = "/banners/placeholder.svg";

const U = (id, w = 500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const trustPoints = [
  { title: "Free delivery", text: "On every order above ₹499" },
  { title: "Easy returns", text: "7-day hassle-free returns" },
  { title: "Secure payments", text: "Secure checkout on all orders" },
  { title: "Genuine products", text: "Quality products for everyone" },
];

const categories = [
  {
    key: "electronics",
    label: "Electronics",
    image: U("photo-1496181133206-80ce9b88a853", 400),
  },
  {
    key: "audio",
    label: "Audio",
    image: U("photo-1505740420928-5e560c06d30e", 400),
  },
  {
    key: "accessories",
    label: "Accessories",
    image: U("photo-1527814050087-3793815479db", 400),
  },
  {
    key: "watches",
    label: "Watches",
    image: U("photo-1524805444758-089113d48a6d", 400),
  },
  {
    key: "fashion",
    label: "Fashion",
    image: U("photo-1542291026-7eec264c27ff", 400),
  },
];

const festivalDeals = [
  {
    type: "image",
    url: U("photo-1441986300917-64674bd600d8", 900),
    alt: "Fashion shopping",
    to: "/electronics",
  },
  {
    type: "video",
    url: "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
    alt: "Festival shopping",
    to: "/deals",
  },
  {
    type: "image",
    url: U("photo-1513201099705-a9746e1e201f", 900),
    alt: "Gift collection",
    to: "/electronics",
  },
  {
    type: "image",
    url: U("photo-1555529669-e69e7aa0ba9a", 900),
    alt: "Shopping store",
    to: "/electronics",
  },
];

const electronicsDeals = [
  {
    type: "image",
    url: U("photo-1505740420928-5e560c06d30e", 900),
    alt: "Headphones",
    to: "/electronics",
  },
  {
    type: "image",
    url: U("photo-1523275335684-37898b6baf30", 900),
    alt: "Smartwatch",
    to: "/electronics",
  },
  {
    type: "video",
    url: "https://videos.pexels.com/video-files/854053/854053-hd_1920_1080_25fps.mp4",
    alt: "Technology showcase",
    to: "/electronics",
  },
  {
    type: "image",
    url: U("photo-1587829741301-dc798b83add3", 900),
    alt: "Mechanical keyboard",
    to: "/electronics",
  },
];

const featuredProducts = [
  {
    id: 1,
    title: "Wireless Smartwatch",
    category: "watches",
    price: "₹2,999",
    image: U("photo-1523275335684-37898b6baf30"),
    rating: 4.5,
  },
  {
    id: 2,
    title: "Noise Cancelling Headphones",
    category: "audio",
    price: "₹4,499",
    image: U("photo-1505740420928-5e560c06d30e"),
    rating: 4.8,
  },
  {
    id: 3,
    title: "Ergonomic Gaming Mouse",
    category: "accessories",
    price: "₹1,299",
    image: U("photo-1527814050087-3793815479db"),
    rating: 4.3,
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    category: "accessories",
    price: "₹3,199",
    image: U("photo-1595225476474-87563907a212"),
    rating: 4.6,
  },
];

const trendingProducts = [
  {
    id: 5,
    title: "Digital Camera",
    category: "electronics",
    price: "₹24,999",
    image: U("photo-1516035069371-29a1b244cc32"),
    rating: 4.5,
  },
  {
    id: 6,
    title: "Portable Speaker",
    category: "audio",
    price: "₹5,499",
    image: U("photo-1608043152269-423dbba4e7e1"),
    rating: 4.7,
  },
  {
    id: 7,
    title: "Gaming Controller",
    category: "accessories",
    price: "₹2,899",
    image: U("photo-1592840496694-26d035b52b48"),
    rating: 4.2,
  },
  {
    id: 8,
    title: "Laptop",
    category: "electronics",
    price: "₹49,999",
    image: U("photo-1496181133206-80ce9b88a853"),
    rating: 4.4,
  },
];

const essentialsProducts = [
  {
    id: 9,
    title: "Running Shoes",
    category: "fashion",
    price: "₹2,999",
    image: U("photo-1542291026-7eec264c27ff"),
    rating: 4.4,
  },
  {
    id: 10,
    title: "Backpack",
    category: "accessories",
    price: "₹1,499",
    image: U("photo-1553062407-98eeb64c6a62"),
    rating: 4.5,
  },
  {
    id: 11,
    title: "Sunglasses",
    category: "fashion",
    price: "₹999",
    image: U("photo-1511499767150-a48a237f0083"),
    rating: 4.3,
  },
  {
    id: 12,
    title: "Wristwatch",
    category: "watches",
    price: "₹3,999",
    image: U("photo-1524805444758-089113d48a6d"),
    rating: 4.6,
  },
];

const allProducts = [
  ...featuredProducts,
  ...trendingProducts,
  ...essentialsProducts,
];

const dealOfTheDay = trendingProducts[3];

const brands = [
  "Apple",
  "Samsung",
  "OnePlus",
  "Google",
  "Nothing",
  "Xiaomi",
];

const reviews = [
  {
    name: "Aarav S.",
    city: "Patiala",
    text: "Delivery was quick and the headphones sounded great.",
  },
  {
    name: "Meera K.",
    city: "Chandigarh",
    text: "The shopping experience was smooth and simple.",
  },
  {
    name: "Rohan D.",
    city: "Ludhiana",
    text: "Found useful electronics and accessories in one place.",
  },
];

function useCountdownToMidnight() {
  const calculate = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    return Math.max(0, end - now);
  };

  const [ms, setMs] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(
      () => setMs(calculate()),
      1000
    );

    return () => clearInterval(timer);
  }, []);

  const total = Math.floor(ms / 1000);
  const pad = (n) => String(n).padStart(2, "0");

  return {
    hours: pad(Math.floor(total / 3600)),
    minutes: pad(Math.floor((total % 3600) / 60)),
    seconds: pad(total % 60),
  };
}

<<<<<<< HEAD

=======
>>>>>>> 02eb5418c09707318108802ede4e678dd7dcd405
function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <article className="hm-card">
      <div className="hm-card__media">
        <span className="hm-card__tag">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      <div className="hm-card__body">
        <h3 className="hm-card__title">
          {product.title}
        </h3>

        <span
          className="hm-card__rating"
          aria-label={`Rated ${product.rating} out of 5`}
        >
          ★ {product.rating}
        </span>

        <div className="hm-card__footer">
          <span className="hm-card__price">
            {product.price}
          </span>

          <button
            type="button"
            className={`hm-card__btn${isAdded ? " is-added" : ""}`}
            onClick={handleAdd}
          >
            {isAdded ? "✓ Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

function SectionHead({ title, subtitle, action }) {
  return (
    <div className="hm-section__head">
      <div>
        <h2 className="hm-section__title">{title}</h2>
        {subtitle && (
          <p className="hm-section__subtitle">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}

function ProductSection({
  id,
  title,
  subtitle,
  products,
  onAddToCart,
  action,
}) {
  return (
    <section id={id} className="hm-section">
      <SectionHead
        title={title}
        subtitle={subtitle}
        action={
          action || (
            <Link
              to="/electronics"
              className="hm-section__link"
            >
              View all
            </Link>
          )
        }
      />

      <div className="hm-products">
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

function BannerSection({ id, title, subtitle, items }) {
  return (
    <section id={id} className="hm-section">
      <SectionHead title={title} subtitle={subtitle} />

      <div className="hm-banners">
        {items.map((item) => (
          <Link
            key={item.alt}
            to={item.to}
            className="hm-banner"
          >
            {item.type === "video" ? (
              <video
                className="hm-banner__media"
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                aria-label={item.alt}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <img
                className="hm-banner__media"
                src={item.url}
                alt={item.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            )}

            <span className="hm-banner__caption">
              <span className="hm-banner__name">
                {item.alt}
              </span>
              <span className="hm-banner__cta">
                Shop now
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 02eb5418c09707318108802ede4e678dd7dcd405
function Home() {
  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const countdown = useCountdownToMidnight();

  const activeInfo = categories.find(
    (category) => category.key === activeCategory
  );

  const categoryProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      categoryFilter === "all" ||
      product.category === categoryFilter;

    const price = Number(
      product.price.replace(/[₹,]/g, "")
    );

    const matchesPrice =
      maxPrice === "all" || price <= Number(maxPrice);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );
  });

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("all");
    setMaxPrice("all");
  };

  return (
    <main id="home-page">
      <div id="announce-bar">
        <p>
          Festival sale is live: free delivery above ₹499.{" "}
          <Link to="/deals">Shop the deals</Link>
        </p>
      </div>

      <Shoping />

      <div className="hm-container">
        <section id="hero">
          <div id="hero-copy">
            <h1 id="hero-title">
              Festival savings on tech
            </h1>

            <p id="hero-text">
              Free delivery above ₹499, easy 7-day returns
              and secure payments on every order.
            </p>

            <div id="hero-actions">
              <Link
                to="/deals"
                className="hm-btn hm-btn--primary"
              >
                Shop today's deals
              </Link>

              <Link
                to="/electronics"
                className="hm-btn hm-btn--ghost"
              >
                Browse electronics
              </Link>
            </div>
          </div>

          <video
            id="hero-art"
            autoPlay
            muted
            loop
            playsInline
            poster={U("photo-1556742049-0cfed4f6a45d", 1200)}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          >
            <source
              src="https://www.pexels.com/download/video/7191512/"
              type="video/mp4"
            />
          </video>
        </section>

        <ul id="trust-strip">
          {trustPoints.map((point) => (
            <li key={point.title} className="hm-trust">
              <strong className="hm-trust__title">
                {point.title}
              </strong>
              <span className="hm-trust__text">
                {point.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Search and filters */}
        <section className="hm-section" id="product-search">
          <SectionHead
            title="Find your products"
            subtitle="Search by name, choose a category or set a price limit"
          />

          <div className="hm-search-controls">
            <input
              type="search"
              value={search}
              placeholder="Search products..."
              aria-label="Search products"
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={categoryFilter}
              aria-label="Filter by category"
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category.key} value={category.key}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={maxPrice}
              aria-label="Filter by maximum price"
              onChange={(e) => setMaxPrice(e.target.value)}
            >
              <option value="all">All prices</option>
              <option value="1000">Under ₹1,000</option>
              <option value="3000">Under ₹3,000</option>
              <option value="5000">Under ₹5,000</option>
              <option value="10000">Under ₹10,000</option>
              <option value="50000">Under ₹50,000</option>
            </select>

            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>

          <p>Products found: {filteredProducts.length}</p>

          {filteredProducts.length > 0 ? (
            <div className="hm-products">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <p>No products found. Try changing your filters.</p>
          )}
        </section>

        {/* Shop by category */}
        <section id="shop-categories" className="hm-section">
          <SectionHead
            title="Shop by category"
            subtitle="Pick a category to see its products"
          />

          <div
            className="hm-cats"
            role="group"
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                className={`hm-cat${
                  activeCategory === category.key ? " is-active" : ""
                }`}
                aria-pressed={activeCategory === category.key}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.key
                      ? null
                      : category.key
                  )
                }
              >
                <span className="hm-cat__img">
                  <img src={category.image} alt="" loading="lazy" />
                </span>

                <span className="hm-cat__label">
                  {category.label}
                </span>

                <span className="hm-cat__count">
                  {
                    allProducts.filter(
                      (product) => product.category === category.key
                    ).length
                  }{" "}
                  items
                </span>
              </button>
            ))}
          </div>
        </section>

        {activeInfo && (
          <ProductSection
            id="category-results"
            title={activeInfo.label}
            subtitle={`${categoryProducts.length} products in this category`}
            products={categoryProducts}
            onAddToCart={addToCart}
            action={
              <button
                type="button"
                className="hm-section__link"
                onClick={() => setActiveCategory(null)}
              >
                Clear filter
              </button>
            }
          />
        )}

        {/* Deal of the day */}
        <section id="deal-of-the-day">
          <div className="hm-deal__media">
            <img
              src={U("photo-1496181133206-80ce9b88a853", 900)}
              alt={dealOfTheDay.title}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
          </div>

          <div className="hm-deal__copy">
            <h2 className="hm-deal__title">
              Deal of the day: {dealOfTheDay.title}
            </h2>

            <p className="hm-deal__text">
              A great deal for work or play. This offer ends at midnight.
            </p>

            <div
              className="hm-timer"
              role="timer"
              aria-label="Time left on today's deal"
            >
              {[
                ["Hours", countdown.hours],
                ["Minutes", countdown.minutes],
                ["Seconds", countdown.seconds],
              ].map(([label, value]) => (
                <div key={label} className="hm-timer__unit">
                  <span className="hm-timer__value">{value}</span>
                  <span className="hm-timer__label">{label}</span>
                </div>
              ))}
            </div>

            <div className="hm-deal__buy">
              <span className="hm-deal__price">
                {dealOfTheDay.price}
              </span>

              <button
                type="button"
                className="hm-btn hm-btn--primary"
                onClick={() => addToCart(dealOfTheDay)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>

        <ProductSection
          id="featured-products"
          title="Featured products"
          subtitle="Hand-picked favourites with top ratings"
          products={featuredProducts}
          onAddToCart={addToCart}
        />

        <BannerSection
          id="festival-deals"
          title="Great Indian Festival"
          subtitle="Offers across every category"
          items={festivalDeals}
        />

        <section id="promo-pair">
          <Link to="/deals" className="hm-promo hm-promo--blue">
            <span className="hm-promo__title">
              Up to 40% off on gifting
            </span>
            <span className="hm-promo__text">
              Find something for everyone on your list.
            </span>
            <span className="hm-promo__cta">Explore gifts</span>
          </Link>

          <Link to="/electronics" className="hm-promo hm-promo--dark">
            <span className="hm-promo__title">
              Upgrade your desk setup
            </span>
            <span className="hm-promo__text">
              Keyboards, mice and more for your workspace.
            </span>
            <span className="hm-promo__cta">Shop accessories</span>
          </Link>
        </section>

        <ProductSection
          id="trending-products"
          title="Trending products"
          subtitle="Popular products for shoppers"
          products={trendingProducts}
          onAddToCart={addToCart}
        />

        <BannerSection
          id="electronics-deals"
          title="Best deals in electronics"
          subtitle="Audio, wearables and accessories"
          items={electronicsDeals}
        />

        <ProductSection
          id="everyday-essentials"
          title="Everyday essentials"
          subtitle="Daily-use picks"
          products={essentialsProducts}
          onAddToCart={addToCart}
        />

        {/* Brands */}
        <section id="top-brands" className="hm-section">
          <SectionHead
            title="Shop top brands"
            subtitle="Explore names you trust"
          />

          <div className="hm-brands">
            {brands.map((brand) => (
              <Link
                key={brand}
                to="/electronics"
                className="hm-brand"
              >
                {brand}
              </Link>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="hm-section">
          <SectionHead
            title="What our customers say"
            subtitle="Customer feedback"
          />

          <div className="hm-reviews">
            {reviews.map((review) => (
              <figure key={review.name} className="hm-review">
                <span
                  className="hm-review__stars"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </span>

                <blockquote className="hm-review__text">
                  {review.text}
                </blockquote>

                <figcaption className="hm-review__who">
                  <strong>{review.name}</strong>
                  <span>{review.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter">
          <div>
            <h2 className="hm-news__title">
              Get deal alerts in your inbox
            </h2>
            <p className="hm-news__text">
              One email a week with useful offers.
            </p>
          </div>

          {subscribed ? (
            <p className="hm-news__done" role="status">
              Thanks for subscribing!
            </p>
          ) : (
            <form
              className="hm-news__form"
              onSubmit={handleSubscribe}
            >
              <label htmlFor="news-email" className="hm-sr-only">
                Email address
              </label>

              <input
                id="news-email"
                className="hm-news__input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="hm-btn hm-btn--primary"
              >
                Subscribe
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

export default Home;
