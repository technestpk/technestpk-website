import React, { useState, useEffect } from "react";
import "./index.css";
import { supabase } from "./supabase";

export default function App() {
  const [page, setPage] = useState("auth");
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // 🔥 FETCH DATA
  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*");
    if (data) setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await supabase.from("categories").select("*");
    if (data) setCategories(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await fetchProducts();
    await fetchCategories();
    setLoading(false);
  };

  // 🔥 ADD PRODUCT
  const addProduct = async () => {
    if (!name || !price) return alert("Fill all fields");

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

  // 🔥 AUTH SYSTEM (FINAL FIXED)
  const submitAuth = async () => {
    if (!email || password.length < 6) {
      return alert("Password min 6 characters hona chahiye");
    }

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password.trim(),
        });

        if (error) {
          alert(error.message);
        } else {
          alert("Signup successful 🔥 Now login");
          setMode("login");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password.trim(),
        });

        if (error) {
          alert(error.message);
        } else {
          setPage("home");

          if (email === "admin@technest.pk") {
            setIsAdmin(true);
          }
        }
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  // 🔍 SEARCH
  const filtered = products.filter((item) =>
    `${item.name} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 🔥 ADMIN PANEL
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

          <select
            className="search-box"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id}>{cat.name}</option>
            ))}
          </select>

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

          <div className="switch-row">
            <button onClick={() => setMode("login")}>Login</button>
            <button onClick={() => setMode("signup")}>Signup</button>
          </div>

          <input
            className="input-box"
            placeholder="Email"
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
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </div>
      </div>
    );
  }

  // 🏠 HOME
  return (
    <div className="main-bg">
      <header className="topbar">
        <h1 className="brand-title small">
          TechNest <span>PK</span>
        </h1>

        <div>
          <button onClick={() => setIsAdmin(true)}>Admin</button>
          <button onClick={() => setPage("auth")}>Logout</button>
        </div>
      </header>

      <div className="search-wrap">
        <input
          className="search-box"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
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
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
