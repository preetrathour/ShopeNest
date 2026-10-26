import React from "react";
import "./Order.css";

const ordersList = [
  {
    id: "ORD-01",
    date: "October 5, 2026",
    status: "Delivered",
    total: "$129.99",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: "$99.99" },
      { name: "Phone Stand", quantity: 1, price: "$30.00" }
    ]
  },
  {
    id: "ORD-02",
    date: "September 28, 2026",
    status: "In Transit",
    total: "$45.50",
    items: [
      { name: "USB-C Cable Pack", quantity: 2, price: "$22.75" }
    ]
  },
  {
    id: "ORD-03",
    date:"september 29,2025",
    status: "transfor done",
    total:343.43,
    items:[
      {
         name: "USB-C Cable Pack", quantity: 2, price: "$22.75"
       
      },
      { name: "USB-C Cable Pack", quantity: 2, price: "$22.75"}
    ]

  }
];

function Orders() {
  return (
    <div className="orders-container">
      <header className="orders-header">
        <h1>Your Orders</h1>
        <p>Check the status of package shipments, manage returns, or buy again.</p>
      </header>

      <div className="orders-list">
        {ordersList.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div>
                <span className="label">Order ID:</span> {order.id}
              </div>
              <div>
                <span className="label">Date:</span> {order.date}
              </div>
              <div>
                <span className="label">Status:</span>{" "}
                <span className={`status ${order.status.toLowerCase().replace(" ", "-")}`}>
                  {order.status}
                </span>
              </div>
            </div>

            <div className="order-body">
              <h3>Items</h3>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index} className="order-item">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-footer">
              <span><strong>Total:</strong> {order.total}</span>
              <button type="button" className="track-button">Track Package</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;