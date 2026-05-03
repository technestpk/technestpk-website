import { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "MagSafe Power Bank", price: 4999, img: "🔋" },
    { id: 2, name: "Gaming Earbuds", price: 3499, img: "🎧" },
    { id: 3, name: "Fast Charger 65W", price: 2999, img: "⚡" },
    { id: 4, name: "Smart Watch Ultra", price: 6999, img: "⌚" },
    { id: 5, name: "RGB Speaker", price: 3999, img: "🔊" },
    { id: 6, name: "Wireless Mouse", price: 2499, img: "🖱️" }
  ];

  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((a, b) => a + b.price, 0);

  const orderWhatsApp = () => {
    let msg = "TechNest PK Order:%0A";
    cart.forEach((item) => {
      msg += `${item.name} - Rs ${item.price}%0A`;
    });
    msg += `Total: Rs ${total}`;
    window.open(`https://wa.me/923239552985?text=${msg}`);
  };

  return (
    <div style={{background:"#0A1F3C",color:"white",minHeight:"100vh",fontFamily:"Arial"}}>

      <div style={{padding:"20px",textAlign:"center"}}>
        <h1 style={{color:"#00FF7F",fontSize:"42px"}}>TechNest PK</h1>
        <p>Your Gadget Destination</p>
      </div>

      <div style={{padding:"20px"}}>
        <h2 style={{color:"#00FF7F"}}>Featured Products</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
          gap:"15px",
          marginTop:"20px"
        }}>

          {products.map((item)=>(
            <div key={item.id} style={{
              background:"#10284d",
              padding:"15px",
              borderRadius:"15px",
              textAlign:"center"
            }}>
              <div style={{fontSize:"50px"}}>{item.img}</div>
              <h3>{item.name}</h3>
              <p style={{color:"#00FF7F"}}>Rs {item.price}</p>

              <button
                onClick={()=>addCart(item)}
                style={{
                  background:"#00FF7F",
                  border:"none",
                  padding:"10px",
                  borderRadius:"10px",
                  cursor:"pointer",
                  fontWeight:"bold"
                }}>
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>

      <div style={{
        background:"#08172e",
        padding:"20px",
        marginTop:"30px"
      }}>
        <h2 style={{color:"#00FF7F"}}>Cart ({cart.length})</h2>
        <p>Total: Rs {total}</p>

        <button
          onClick={orderWhatsApp}
          style={{
            background:"#25D366",
            border:"none",
            padding:"12px 20px",
            borderRadius:"10px",
            cursor:"pointer",
            fontWeight:"bold"
          }}>
          Order on WhatsApp
        </button>
      </div>

    </div>
  );
}
