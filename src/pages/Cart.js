import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
  const [number, setNumber] = useState(1);
  const [bill, setBill] = useState(0);
  const { cart, totalPrice } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  //   console.log(cart.length);

  //   billHandler();
  console.log(cart);
  console.log(totalPrice);
  let cartArr = [];
  cartArr.push(cart);
  //   console.log(cartArr);

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
                <img src={items.img} className={'cartImage'} alt={items.name} />
              </td>
              <td>{items.name}</td>
              <td>
                <button
                  onClick={() => dispatch({ type: 'INC', payload: items.id })}
                >
                  +
                </button>
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
      <h1>Total Bill: {bill}</h1>
    </div>
  );
};

export default Cart;
