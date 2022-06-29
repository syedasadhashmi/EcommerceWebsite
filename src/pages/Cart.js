// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Space, Table, Button } from "antd";

const Cart = () => {
  // const [number, setNumber] = useState(1);
  // const [bill, setBill] = useState(0);
  const { shoes } = useSelector((state) => state.productsReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);
  console.log(shoes);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (cart.length) {
  //     setBill(() => {
  //       cart.map((items) => {
  //         bill += items.price;
  //         return bill;
  //       });
  //     });
  //   }
  // }, [bill]);

  const columns = [
    {
      title: "Images",
      dataIndex: "img",
      render: (e) => <img src={e} className="cartImage" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (e) => <h4>${e}</h4>,
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      render: (e, record) => {
        console.log(record, "record");
        return (
          <>
            <Button
              onClick={() =>
                dispatch({ type: "INCREMENT", payload: { record } })
              }
            >
              +
            </Button>
            <span>{e}</span>
            <Button
              onClick={() =>
                dispatch({ type: "DECREMENT", payload: { record } })
              }
            >
              -
            </Button>
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (e, record) => (
        <Button
          onClick={() => dispatch({ type: "DELETE", payload: { record } })}
        >
          Delete
        </Button>
      ),
    },
  ];
  //   console.log(cart.length);
  //   billHandler();
  // console.log(cart);
  // console.log(totalPrice);
  // let cartArr = [];
  // cartArr.push(cart);
  //   console.log(cartArr);

  // const decrementHanndler = () => {
  //   setNumber(number - 1);
  // };

  return (
    <div className="containerCart">
      <h1>Shopping Cart</h1>
      <Table rowKey={"id"} columns={columns} dataSource={cart} />
      {/* <button onClick={dispatch({ type: "CLEARALL" })}>Clear All</button> */}
      {/* <h1>Total Bill: {bill}</h1> */}
      {/* <h1>Shoping Cart</h1>
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
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: { items } })
                  }
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
      </table> */}
      {/* <h1>Total Bill: {bill}</h1> */}
    </div>
  );
};

export default Cart;
