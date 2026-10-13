import "./Navbar.css";
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <h2>ShopNest</h2>
      </Link>
      <input type="text" placeholder="Search Product Here" />
      <div className="nav-links">
        
<div className="nav-links">
  <Link to="/electronics">Electronics</Link>
  <Link to="/mobile">Mobiles</Link> 
</div>
        <Link to="/account">Account</Link>
        <Link to="/orders">Order</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default navbar;