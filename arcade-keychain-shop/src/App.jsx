import { useState } from "react";
import Header from "./components/Header";
import Shelf from "./components/Shelf";
import Controls from "./components/Controls";

const products = [
  { name: "Game On", price: 8.99, emoji: "🎮" },
  { name: "Astro", price: 6.99, emoji: "👨‍🚀" },
  { name: "Gamer Bear", price: 9.99, emoji: "🐻" },
  { name: "Neon Pad", price: 7.5, emoji: "🕹️" },
  { name: "Neon Pad", price: 7.5, emoji: "🕹️" },
  { name: "Neon Pad", price: 7.5, emoji: "🕹️" },
  { name: "Poke", price: 8.49, emoji: "⚡" }
];

function App() {
  const [index, setIndex] = useState(2);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const moveLeft = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const addWishlist = () => {
    setWishlist([...wishlist, products[index]]);
  };

  const addCart = () => {
    setCart([...cart, products[index]]);
  };

  return (
    <div className="app">
      <Header wishlist={wishlist.length} cart={cart.length} />

      <h2 className="title">ROTATING SHELF</h2>

      <Shelf products={products} selected={index} />

      <Controls
        moveLeft={moveLeft}
        moveRight={moveRight}
        addWishlist={addWishlist}
        addCart={addCart}
      />
    </div>
  );
}

export default App;