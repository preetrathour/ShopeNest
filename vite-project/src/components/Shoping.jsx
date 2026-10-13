// src/components/Shoping.jsx

import { Link } from 'react-router-dom';
function Shoping() {
  return (
    <div className="shopping">
      <Link to="/">All</Link>
      <Link to="/amazonPay">amazon Pay</Link>
      <Link to="/Mobile">Mobile</Link>
      <Link to="/TodaysDeals">Today's Deal</Link>
      <Link to="/coupons">Coupons</Link>
      <Link to="/flights">Flights</Link>
      <Link to="/Electronics">Electronics</Link>
    </div>
  );

}



export default Shoping; 

