import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, deleteRecord } from "../redux/cart/cartActions";
import "./Cart.css";
import { Table, Button } from "antd";
import Login from "./Login";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { status } = useSelector((state) => state.registrationReducer);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Images",
      dataIndex: "img",
      render: (e) => <img src={e} className="cartImage" alt={e} />,
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
      title: "Action",
      key: "action",
      render: (e, record) => {
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

  return (
    <>
      {status ? (
        <div className="containerCart">
          <h1>Shopping Cart</h1>
          <Table rowKey={"id"} columns={columns} dataSource={cart} />
          {cart.length >= 1 && (
            <Button style={{ float: " right", width: "300px" }}>Buy</Button>
          )}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Cart;
