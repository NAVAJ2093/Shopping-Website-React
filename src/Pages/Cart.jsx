import React from "react";
import "../Pages/CSS/Cart.css";
import remove_icon from "../../src/Components/Assets/cart_icon.png";
import { removeFromCart } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const all_product = useSelector((state) => state.shop.all_product);
  const cartItems = useSelector((state) => state.cart.items);

  let subtotal = 0;
  Object.keys(cartItems).forEach((itemId) => {
    const item = all_product.find((product) => product.id === parseInt(itemId));
    if (item) {
      subtotal += item.new_price * cartItems[itemId];
    }
  });
  const total = subtotal;

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => dispatch(removeFromCart(e.id))}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
        </div>
        <div className="cartitems-total-item">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <h3>Total</h3>
          <h3>${total}</h3>
        </div>
      </div>
      <button className="cart-total-btn">PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default Cart;
