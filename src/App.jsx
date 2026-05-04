import React, { useState, useEffect } from "react";
import "./index.css";
import { supabase } from "./supabase";

export default function App() {
  const [page, setPage] = useState("auth");
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  // 🔥 ADMIN STATE
  const [isAdmin, setIsAdmin] = useState(false);

  // 🔥 PRODUCT STATES
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // 🔥 FETCH PRODUCTS FROM SUPABASE
  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (!error) setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔥 ADD PRODUCT
  const addProduct = async () => {
    const { error } = await supabase.from("products").insert([
      {
        name,
        price: Number(price),
        image_url: image,
        category,
      },
    ]);

    if (!error) {
      alert("Product Added 🔥");
      setName("");
      setPrice("");
      setImage("");
      setCategory("");
      fetchProducts();
    } else {
      alert("Error adding product");
    }
  };

  // 🔥 SMART SEARCH
  const filtered = products.filter((item) =>
    `${item.name} ${item.category} ${item.brand || ""} ${item.model || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const submitAuth = () => {
    if (email && password.length >= 4) {
      setPage("home");
    } else {
      alert("Enter valid email & password");
    }
  };

  // 🔥 ADMIN PANEL UI
  if (isAdmin) {
    return (
      <div className="main-bg">
        <h1 style={{ textAlign: "center" }}>Admin Panel 🔥</h1>

        <div className="search-wrap">
          <input
            className="search-box"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="search-box"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="search-box"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="search-box"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button className="main-btn" onClick={addProduct}>
            Add Product
          </button>

          <button
            className="logout-btn"
            onClick={() => setIsAdmin(false)}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // 🔐 AUTH PAGE
  if (page === "auth") {
    return (
      <div className="main-bg auth-wrap">
        <div className="glass-card auth-card">
          <h1 className="brand-title">
            TechNest <span>PK</span>
          </h1>
          <p className="sub-title">Premium Gadget Destination</p>

          <div className="switch-row">
            <button
              className={mode === "login" ? "active-btn" : "ghost-btn"}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={mode === "signup" ? "active-btn" : "ghost-btn"}
              onClick={() => setMode("signup")}
            >
              Signup
            </button>
          </div>

          <input
            className="input-box"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input-box"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="main-btn" onClick={submitAuth}>
            {mode === "login" ? "Login Now" : "Create Account"}
          </button>

          <p className="mini-text">Luxury Electronics Experience</p>
        </div>
      </div>
    );
  }

  // 🏠 HOME PAGE
  return (
    <div className="main-bg">
      <header className="topbar">
        <h1 className="brand-title small">
          TechNest <span>PK</span>
        </h1>

        <div>
          <button onClick={() => setIsAdmin(true)}>Admin</button>

          <button
            className="logout-btn"
            onClick={() => setPage("auth")}
          >
            Logout
          </button>
        </div>
      </header>

      <section className="hero-box">
        <h2>Premium Accessories Store</h2>
        <p>Power Banks • Earbuds • Chargers • Smart Gadgets</p>
      </section>

      <div className="search-wrap">
        <input
          className="search-box"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className="grid-wrap">
        {filtered.map((item, index) => (
          <div key={index} className="product-card">
            <div className="img-box">
              {item.image_url ? (
                <img src={item.image_url} alt="" width="100%" />
              ) : (
                "⚡"
              )}
            </div>
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>
            <button className="main-btn">Add To Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
}
