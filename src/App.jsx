import React, { useMemo, useState } from 'react';

const categories = [
  { name: 'Power Banks', desc: 'Premium imported quality with warranty.' },
  { name: 'Earbuds', desc: 'Bass-rich, sleek and premium.' },
  { name: 'Chargers', desc: 'Fast charging essentials.' },
  { name: 'Gaming', desc: 'Bold accessories for power users.' },
];

const products = [
  'VoltX Powerbank',
  'NeoBuds Pro',
  'Turbo Charger',
  'Gaming Cable',
];

const loyalty = [
  { tier: 'Silver', note: 'Starter member benefits' },
  { tier: 'Gold', note: 'Priority stock & better pricing' },
  { tier: 'Platinum', note: 'Best rates & exclusive access' },
];

const menuItems = ['Home', 'Shop', 'Dealer', 'Import', 'Account', 'Admin'];

function BrandLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 rounded-full border border-[#00ff7f]/70 bg-gradient-to-br from-black via-[#0a1f3c] to-black shadow-[0_0_30px_rgba(0,255,127,0.28)] flex items-center justify-center">
        <div className="text-[#00ff7f] font-black text-2xl tracking-tight">TN</div>
      </div>
      <div>
        <div className="text-4xl md:text-6xl font-black tracking-[-0.06em] uppercase leading-none">
          <span className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.16)]">TechNest </span>
          <span className="text-[#00ff7f] drop-shadow-[0_0_14px_rgba(0,255,127,0.45)]">PK</span>
        </div>
        <div className="mt-2 text-xs md:text-sm tracking-[0.5em] text-[#c9a24a] uppercase">Your Gadget Destination</div>
      </div>
    </div>
  );
}

function Card({ title, children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,255,127,0.06),rgba(10,31,60,0.12)_28%,rgba(0,0,0,0.98)_70%)] shadow-[0_30px_80px_rgba(0,0,0,0.45)] ${className}`}>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-black tracking-[-0.04em] text-white">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function TechNestPK() {
  const [cart,setCart]=useState([]);
  const [userEmail,setUserEmail]=useState('');
  const [userPassword,setUserPassword]=useState('');
  const loginUser=()=>{ if(userEmail && userPassword.length>=6){ setLoggedIn(true);} };
  const addToCart=(name)=>setCart(v=>[...v,name]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');

  const stats = useMemo(
    () => [
      { label: 'Premium Products', value: '120+' },
      { label: 'Dealer Network', value: '250+' },
      { label: 'Loyalty Members', value: '8k+' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        <div className="rounded-[36px] border border-[#00ff7f]/20 bg-[linear-gradient(180deg,rgba(10,31,60,0.95),rgba(0,0,0,0.98))] p-4 md:p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div><div className="text-4xl md:text-6xl font-black tracking-[-0.06em] uppercase leading-none"><span className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.16)]">TechNest </span><span className="text-[#00ff7f] drop-shadow-[0_0_14px_rgba(0,255,127,0.45)]">PK</span></div><div className="mt-2 text-xs md:text-sm tracking-[0.5em] text-[#c9a24a] uppercase">Your Gadget Destination</div></div>
            <nav className="flex flex-wrap items-center gap-2 md:gap-3 text-sm md:text-base">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveMenu(item)}
                  className={`rounded-full border px-4 py-2 transition ${activeMenu === item ? 'border-[#00ff7f] bg-[#00ff7f]/10 text-[#00ff7f]' : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="rounded-[30px] border border-[#00ff7f]/20 bg-[radial-gradient(circle_at_top_left,rgba(0,255,127,0.14),transparent_32%),linear-gradient(135deg,rgba(10,31,60,0.7),rgba(0,0,0,0.95))] p-6 md:p-10">
              <div className="inline-flex items-center rounded-full border border-[#c9a24a]/40 bg-[#c9a24a]/10 px-4 py-2 text-xs tracking-[0.35em] text-[#e9c77a] uppercase">
                Premium Electronics Brand
              </div>

              <div className="mt-5 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-black tracking-[-0.07em] leading-[0.92]">
                  <span className="text-white">TechNest </span>
                  <span className="text-[#00ff7f]">PK</span>
                </h1>
                <p className="mt-4 text-base md:text-lg leading-8 text-white/75 max-w-xl">
                  Premium mobile accessories, wholesale dealer system, loyalty cards, import requests, WhatsApp automation and a luxury admin dashboard in one platform.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-[#00ff7f] px-6 py-3 text-base font-black text-black shadow-[0_0_24px_rgba(0,255,127,0.3)] transition hover:scale-[1.02]">
                  Shop Now
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-[#00ff7f]/50 hover:bg-[#00ff7f]/8">
                  Become Dealer
                </button>
                <button className="rounded-2xl border border-[#c9a24a]/40 bg-[#c9a24a]/10 px-6 py-3 text-base font-semibold text-[#f2d89f] transition hover:bg-[#c9a24a]/15">
                  Import on Demand
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
                    <div className="text-3xl font-black tracking-[-0.05em] text-white">{s.value}</div>
                    <div className="mt-1 text-sm text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card title="Brand Priority">
                <div className="mt-4 space-y-3 text-white/75">
                  <div>• Black + neon green + gold premium look</div>
                  <div>• TechNest PK name in white, PK in neon green</div>
                  <div>• Stylish premium font feel with strong spacing</div>
                  <div>• Logo visible beside brand title</div>
                </div>
              </Card>

              <Card title="Login & Access">
                <div className="mt-4 flex flex-wrap gap-3"><input value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="Email" className="rounded-2xl px-4 py-3 bg-black border border-white/10" /><input value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} placeholder="Password" type="password" className="rounded-2xl px-4 py-3 bg-black border border-white/10" />
                  <button
                    onClick={() => loggedIn ? setLoggedIn(false) : loginUser()}
                    className={`rounded-2xl px-5 py-3 font-bold transition ${loggedIn ? 'bg-[#00ff7f] text-black' : 'border border-white/15 bg-white/5 text-white'}`}
                  >
                    {loggedIn ? 'Logout User' : 'Login User'}
                  </button>
                  <button
                    onClick={() => setIsAdmin((v) => !v)}
                    className={`rounded-2xl px-5 py-3 font-bold transition ${isAdmin ? 'bg-[#c9a24a] text-black' : 'border border-[#c9a24a]/30 bg-[#c9a24a]/10 text-[#f2d89f]'}`}
                  >
                    {isAdmin ? 'Admin Mode On' : 'Admin Mode Demo'}
                  </button>
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-black/50 p-4">
                  {!loggedIn ? (
                    <p className="text-white/60">Account area will show after login: Unique ID, QR, loyalty card, points and order history.</p>
                  ) : (
                    <div>
                      <div className="text-[#00ff7f] font-bold">TNPK-000184</div>
                      <div className="mt-2 text-white/75">QR Code, Silver / Gold / Platinum card, purchase history and reward points visible here.</div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card title="Premium Categories">
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {categories.map((c) => (
                  <div key={c.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xl font-black tracking-[-0.04em] text-white">{c.name}</div>
                    <div className="mt-2 text-sm leading-6 text-white/60">{c.desc}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Admin Panel Preview">
              <div className="mt-4 space-y-3 text-white/75">
                <div>• Add / edit products</div>
                <div>• Change banners from gallery</div>
                <div>• Manage categories anytime</div>
                <div>• Run WhatsApp automation</div>
                <div>• Export QR membership cards</div>
              </div>
              <div className="mt-5 rounded-3xl border border-[#00ff7f]/20 bg-[#00ff7f]/5 p-4 text-sm text-white/70">
                {isAdmin ? 'Admin control view is active in this demo.' : 'Admin controls will only show after admin login.'}
              </div>
            </Card>
          </section>

          <section className="mt-6 rounded-[30px] border border-white/10 bg-black/40 p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-[-0.05em]">Featured Products</h2>
                <p className="mt-2 text-white/60">Premium cards with editable gallery images and luxury presentation.</p>
              </div>
              <div className="text-sm tracking-[0.3em] uppercase text-[#c9a24a]">Gallery Editable</div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {products.map((p) => (
                <div key={p} className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,8,8,0.85),rgba(16,16,16,0.95))] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                  <div className="h-40 rounded-2xl border border-[#00ff7f]/15 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.16),rgba(255,255,255,0.03)_28%,rgba(0,0,0,0.85)_72%)]" />
                  <div className="mt-4 text-xl font-black tracking-[-0.04em] text-white">{p}</div>
                  <div className="mt-1 text-sm text-white/60">TechNest premium series</div>
                  <button className="mt-4 w-full rounded-2xl bg-[#00ff7f] px-4 py-3 font-bold text-black">Buy Now</button><button onClick={() => addToCart(p)} className="mt-2 w-full rounded-2xl border border-white/10 px-4 py-3 font-bold text-white">Add To Cart</button>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            {loyalty.map((item) => (
              <div key={item.tier} className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),rgba(10,31,60,0.65))] p-6">
                <div className="text-3xl font-black tracking-[-0.05em] text-white">{item.tier}</div>
                <div className="mt-2 text-[#00ff7f] font-semibold">TechNest Member Card</div>
                <div className="mt-3 text-sm leading-6 text-white/65">{item.note}</div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/50 p-4 text-xs tracking-[0.35em] uppercase text-[#c9a24a]">
                  QR / ID / Points / Rewards
                </div>
              </div>
            ))}
          </section>

          <footer className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-white/45">
            © TechNest PK — Premium Mobile Accessories & Gadget Brand | Cart Items: {cart.length}
          </footer>
        </div>
      </div>
    </div>
  );
}
