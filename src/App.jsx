import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("auth");
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  const products = [
    { name: "VoltX Power Bank", price: "Rs 4,999" },
    { name: "NeoBuds Pro", price: "Rs 3,999" },
    { name: "Turbo Charger 65W", price: "Rs 2,499" },
    { name: "Gaming Cable RGB", price: "Rs 1,299" },
    { name: "Smart Watch Ultra", price: "Rs 6,999" },
    { name: "Wireless Mouse", price: "Rs 2,199" }
  ];

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const submitAuth = () => {
    if (email && password.length >= 4) {
      setPage("home");
    } else {
      alert("Enter valid email & password");
    }
  };

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

  return (
    <div className="main-bg">
      <header className="topbar">
        <h1 className="brand-title small">
          TechNest <span>PK</span>
        </h1>
        <button className="logout-btn" onClick={() => setPage("auth")}>
          Logout
        </button>
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
            <div className="img-box">⚡</div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="main-btn">Add To Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
}
