import SearchResults from './pages/SearchResults';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Account from './pages/Account';
import Orders from './pages/Order';
import CartPage from './pages/CartPage';
import AmazonPay from './pages/AmazonPay';
import Mobile from './pages/Mobile';
import TodaysDeals from './pages/TodaysDeals';
import Coupons from './pages/coupons';
import Flights from './pages/flights';
import Electronics from "./pages/Electronics";
import Footer from "./components/Footer";
import { CartProvider } from './context/CartContext';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <CartProvider>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/amazonPay" element={<AmazonPay />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/TodaysDeals" element={<TodaysDeals />} />
        <Route path="/Coupons" element={<Coupons />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Cartcontext" element={<Electronics />} />
        <Route path="/search" element={<SearchResults/>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

    </CartProvider>
  );
}

export default App;