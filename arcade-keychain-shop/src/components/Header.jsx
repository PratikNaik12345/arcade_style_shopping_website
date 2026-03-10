function Header({ wishlist, cart }) {
  return (
    <div className="header">

      <h1 className="logo">🎮 KEYZONE</h1>

      <div className="search">
        <input placeholder="Search Keychains..." />
      </div>

      <div className="icons">
        ❤️ {wishlist}
        🛒 {cart}
        👤
      </div>

    </div>
  );
}

export default Header;