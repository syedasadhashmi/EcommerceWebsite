// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, deleteRecord } from '../redux/cart/cartActions';
import './Cart.css';
import { Table, Button } from 'antd';

const Cart = () => {
  // const [number, setNumber] = useState(1);
  // const [bill, setBill] = useState(0);
  // const { shoes } = useSelector((state) => state.productsReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);
  // console.log(shoes);
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
      title: 'Images',
      dataIndex: 'img',
      render: (e) => <img src={e} className="cartImage" alt={e} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (e) => <h4>${e}</h4>,
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
      render: (e, record) => {
        console.log(record, 'record');
        return (
          <>
            <Button onClick={() => dispatch(increment({ record }))}>+</Button>
            <span>{e}</span>
            <Button onClick={() => dispatch(decrement({ record }))}>-</Button>
          </>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (e, record) => {
        console.log(record.id, 'recordID');
        return (
          <>
            <Button onClick={() => dispatch(deleteRecord({ record }))}>
              Delete
            </Button>
          </>
        );
      },
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
      <Table rowKey={'id'} columns={columns} dataSource={cart} />
      {cart.length >= 1 && (
        <Button style={{ float: ' right', width: '300px' }}>Buy</Button>
      )}
    </div>
  );
};

export default Cart;
