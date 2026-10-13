// src/pages/Home.jsx
import React from "react";
import {useCart} from "../context/CartContext";

import Shoping from "../components/Shoping";
import Cart from "../components/cart";
import ProductList from "../components/ProductList";

const festivalDeals = [
  { type: "image", url: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6509ab56-d79c-4044-a303-d92291793ebd._SX855_.jpg" },
  { type: "image", url: "https://m.media-amazon.com/images/I/71hZacnedTL._AC_AIweblab1431263,T1_FMavif_SF1282.5,2052_QL54_.jpg?aicid=homepage-single-creative-card" },
  { type: "video", url: "https://m.media-amazon.com/images/I/B1fQQ2vA6nL.mp4" },
  { type: "video", url: "https://m.media-amazon.com/images/I/D1sXY2M-GGL.mp4" },
];

const electronicsDeals = [
  { type: "image", url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
  { type: "image", url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500" },
  { type: "image", url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
  { type: "image", url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
];

const productsList = [
  { id: 1, title: "Wireless Smartwatch", price: "₹2,999", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: 4.5 },
  { id: 2, title: "Noise Cancelling Headphones", price: "₹4,499", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: 4.8 },
  { id: 3, title: "Ergonomic Gaming Mouse", price: "₹1,299", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", rating: 4.3 },
  { id: 4, title: "Mechanical Keyboard", price: "₹3,199", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", rating: 4.6 }
];

const productsList2 = [
  { id: 5, title: "4k Ultra Smart Watch", price: "₹24,999", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500", rating: 8.5 },
  { id: 6, title: "Noise Cancelling Headphones", price: "₹4,499", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: 4.8 },
  { id: 7, title: "Ergonomic Gaming Mouse", price: "₹1,299", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", rating: 4.3 },
  { id: 8, title: "Mechanical Keyboard", price: "₹3,199", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", rating: 4.6 }
];

const productList3 = [
   { id: 9, title: "4k Ultra Smart Watch", price: "₹24,999", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500", rating: 8.5 },
  { id: 10, title: "Noise Cancelling Headphones", price: "₹4,499", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: 4.8 },
  { id: 11, title: "Ergonomic Gaming Mouse", price: "₹1,299", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", rating: 4.3 },
  { id: 12, title: "Mechanical Keyboard", price: "₹3,199", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", rating: 4.6 }
]
function Home() {
  // Cart state storing selected products
  const { cartItems, addToCart } = useCart();

  return (
    <main>
      {/* Show dynamic cart total badge */}

      <Shoping />
      <Cart title="Great Indian Festival" items={festivalDeals} />
      <Cart title="Best Deals in Electronics" items={electronicsDeals} />
      
      <ProductList 
        title="Featured Products" 
        products={productsList} 
        onAddToCart={addToCart} 
      />

      <ProductList
      title="Trending Deals & Essentials"
      products={productsList2}
      onAddToCart={addToCart}
      />

      <ProductList
      title="Trending Deals & Essentials"
      products={productList3}
      onAddToCart={addToCart}
      />
    </main>
  );
}
export default Home;