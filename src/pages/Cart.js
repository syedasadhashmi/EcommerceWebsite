import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const [number, setNumber] = useState(1);
  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart.length);
  let cartArr = [];
  cartArr.push(cart);
  console.log(cartArr);
  const incrementHanndler = () => {
    setNumber(number + 1);
  };
  const decrementHanndler = () => {
    setNumber(number - 1);
  };

  return (
    <div className="containerCart">
      <h1>Shoping Cart</h1>
      <table className="customTable">
        <thead>
          <tr>
            <td>#</td>
            <td>Image</td>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((items, i) => (
            <tr key={items.id}>
              <td>{i + 1}</td>
              <td>
                <img src={items.img} className={"cartImage"} alt={items.name} />
              </td>
              <td>{items.name}</td>
              <td>
                <button onClick={incrementHanndler}>+</button>
                {number}
                <button onClick={decrementHanndler}>-</button>
              </td>
              <td>${items.price}</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
