function Controls({ moveLeft, moveRight, addWishlist, addCart }) {
  return (
    <div className="controls">

      <div className="joystick">
        <button onClick={moveLeft}>⬅</button>
        <button onClick={moveRight}>➡</button>
      </div>

      <button className="select">SELECT</button>

      <button className="wishlist" onClick={addWishlist}>
        ❤️ WISH LIST
      </button>

      <button className="cart" onClick={addCart}>
        🛒 ADD TO CART
      </button>

    </div>
  );
}

export default Controls;

