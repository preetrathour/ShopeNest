import React, { useState, useEffect } from "react";
import "./AdminSection.css";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      category,
      image,
      description,
      stock: Number(stock),
    };

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Product could not be added");
      }

      alert("Product added successfully!");

      setName("");
      setPrice("");
      setCategory("");
      setImage("");
      setDescription("");
      setStock("");

      fetchProducts();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Product deleted successfully!");
      fetchProducts();
    } else {
      alert("Unable to delete product");
    }
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1 className="admin-title">ShopNest Admin</h1>
        <span className="admin-count">{products.length} products</span>
      </header>

      <main className="admin-layout">
        {/* ---------- Add product form ---------- */}
        <section className="admin-card form-card">
          <h2 className="section-title">Add new product</h2>

          <form className="product-form" onSubmit={handleSubmit}>
            <div className="field field-full">
              <label htmlFor="name">Product name</label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Cotton Kurta"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="price">Price (₹)</label>
              <input
                id="price"
                type="number"
                placeholder="999"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="stock">Stock</label>
              <input
                id="stock"
                type="number"
                placeholder="25"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </div>

            <div className="field field-full">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="e.g. Clothing"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            <div className="field field-full">
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                type="text"
                placeholder="https://..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            <div className="field field-full">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Short details about the product"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary field-full">
              Add product
            </button>
          </form>
        </section>

        {/* ---------- Product list ---------- */}
        <section className="products-section">
          <h2 className="section-title">All products</h2>

          {products.length === 0 ? (
            <div className="empty-state">
              No products yet. Add your first product using the form.
            </div>
          ) : (
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product._id}>
                  <div className="product-image-wrap">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />
                    <span className="product-category">{product.category}</span>
                  </div>

                  <div className="product-body">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">₹{product.price}</p>

                    <span
                      className={`stock-badge ${
                        product.stock === 0
                          ? "out"
                          : product.stock <= 5
                          ? "low"
                          : "in"
                      }`}
                    >
                      {product.stock === 0
                        ? "Out of stock"
                        : `${product.stock} in stock`}
                    </span>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Admin;