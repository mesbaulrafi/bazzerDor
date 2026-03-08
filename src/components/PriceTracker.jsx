import { useState, useEffect } from "react";
import { initialProducts, categories } from "./initialProducts";
import Footer from "./layouts/Footer";

export default function PriceTracker() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTicker(t => t + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date().toLocaleDateString("bn-BD", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  const filtered = products
    .filter(p => selectedCategory === "সব" || p.category === selectedCategory)
    .filter(p =>
      p.name.includes(searchQuery) ||
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "change") return (b.price - b.prevPrice) - (a.price - a.prevPrice);
      return a.id - b.id;
    });

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditValue(product.price.toString());
  };

  const handleSave = (id) => {
    const val = parseFloat(editValue);
    if (!isNaN(val) && val > 0) {
      setProducts(prev =>
        prev.map(p => p.id === id ? { ...p, prevPrice: p.price, price: val } : p)
      );
      setLastUpdated(new Date());
    }
    setEditingId(null);
  };

  const priceChange = (p) => p.price - p.prevPrice;
  const pctChange = (p) => (((p.price - p.prevPrice) / p.prevPrice) * 100).toFixed(1);

  const rising = products.filter(p => p.price > p.prevPrice).length;
  const falling = products.filter(p => p.price < p.prevPrice).length;

  return (
    <div className="min-h-screen bg-amber-50 font-sans" style={{ fontFamily: "'Segoe UI', 'Noto Sans Bengali', sans-serif" }}>
      {/* Decorative top stripe */}
      <div className="h-2 bg-linear-to-r from-green-600 via-red-600 to-green-600" />

      {/* Header */}
      <header className="bg-green-800 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px"
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-5xl">🛒</span>
                <div>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
                    চাসি বাজার
                  </h1>
                  <p className="text-green-200 text-sm font-medium tracking-widest uppercase mt-1">
                    Chassi Bajder — Daily Market Prices
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-green-700 rounded-xl px-4 py-3 inline-block border border-green-500">
                <p className="text-green-300 text-xs uppercase tracking-widest">আজকের তারিখ</p>
                <p className="text-white font-bold text-sm mt-1">{today}</p>
                <p className="text-green-300 text-xs mt-1">
                  আপডেট: {lastUpdated.toLocaleTimeString("bn-BD")}
                </p>
              </div>
            </div>
          </div>

          {/* Ticker Bar */}
          <div className="mt-4 bg-red-700 rounded-lg px-4 py-2 flex items-center gap-3 overflow-hidden">
            <span className="bg-yellow-400 text-red-900 text-xs font-black px-2 py-0.5 rounded shrink-0">LIVE</span>
            <div className="overflow-hidden flex-1">
              <div className="flex gap-8 text-sm text-white animate-pulse">
                {products.slice(ticker % 4, (ticker % 4) + 4).map(p => (
                  <span key={p.id} className="shrink-0">
                    {p.icon} {p.nameEn}: ৳{p.price}/{p.unit}
                    <span className={p.price > p.prevPrice ? "text-red-300" : p.price < p.prevPrice ? "text-green-300" : "text-gray-300"}>
                      {" "}({p.price > p.prevPrice ? "▲" : p.price < p.prevPrice ? "▼" : "—"}{Math.abs(pctChange(p))}%)
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Row */}
      <div className="bg-white border-b border-amber-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-black text-gray-800">{products.length}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">মোট পণ্য</p>
          </div>
          <div>
            <p className="text-2xl font-black text-red-600">↑{rising}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">দাম বেড়েছে</p>
          </div>
          <div>
            <p className="text-2xl font-black text-green-600">↓{falling}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">দাম কমেছে</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="পণ্য খুঁজুন... (Search products)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-amber-300 rounded-xl bg-white focus:outline-none focus:border-green-500 text-gray-800 placeholder-gray-400"
            />
          </div>
          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border-2 border-amber-300 rounded-xl px-4 py-3 bg-white text-gray-700 focus:outline-none focus:border-green-500"
          >
            <option value="default">ডিফল্ট সাজান</option>
            <option value="price-asc">দাম: কম → বেশি</option>
            <option value="price-desc">দাম: বেশি → কম</option>
            <option value="change">পরিবর্তন অনুযায়ী</option>
          </select>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-green-700 text-white border-green-700 shadow-md scale-105"
                  : "bg-white text-green-800 border-green-300 hover:border-green-600 hover:bg-green-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-semibold">কোনো পণ্য পাওয়া যায়নি</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(product => {
              const change = priceChange(product);
              const pct = pctChange(product);
              const isUp = change > 0;
              const isDown = change < 0;
              const isEditing = editingId === product.id;

              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 overflow-hidden ${
                    isUp ? "border-red-200" : isDown ? "border-green-200" : "border-gray-200"
                  }`}
                >
                  {/* Card top accent */}
                  <div className={`h-1.5 ${isUp ? "bg-red-500" : isDown ? "bg-green-500" : "bg-gray-300"}`} />

                  <div className="p-4">
                    {/* Icon + Category */}
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">{product.icon}</span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-black text-gray-900 text-lg leading-tight">{product.name}</h3>
                    <p className="text-gray-400 text-xs mb-3">{product.nameEn}</p>

                    {/* Price Display */}
                    <div className="flex items-end justify-between">
                      <div>
                        {isEditing ? (
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500 font-bold">৳</span>
                            <input
                              type="number"
                              value={editValue}
                              onChange={e => setEditValue(e.target.value)}
                              onKeyDown={e => e.key === "Enter" && handleSave(product.id)}
                              autoFocus
                              className="w-24 border-2 border-green-400 rounded-lg px-2 py-1 text-xl font-black text-gray-900 focus:outline-none"
                            />
                          </div>
                        ) : (
                          <p className="text-3xl font-black text-gray-900">
                            ৳<span>{product.price}</span>
                            <span className="text-sm font-medium text-gray-400 ml-1">/{product.unit}</span>
                          </p>
                        )}

                        {/* Change badge */}
                        <div className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                          isUp ? "bg-red-100 text-red-700" : isDown ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                        }`}>
                          {isUp ? "▲" : isDown ? "▼" : "—"}
                          {Math.abs(change)} ({Math.abs(pct)}%)
                          <span className="font-normal opacity-70 ml-1">আগে ৳{product.prevPrice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Edit Button */}
                    <div className="mt-3 flex gap-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => handleSave(product.id)}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-1.5 rounded-lg transition-colors"
                          >
                            ✓ সংরক্ষণ
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold py-1.5 rounded-lg transition-colors"
                          >
                            বাতিল
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleEdit(product)}
                          className="w-full bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold py-1.5 rounded-lg transition-colors"
                        >
                          ✏️ দাম আপডেট করুন
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}