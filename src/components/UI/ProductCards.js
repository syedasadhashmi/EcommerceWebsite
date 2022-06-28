import { Button, Card, Col, Row } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./ProductCards.css";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const { shoes } = useSelector((shoes) => shoes.productsReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);
  // const disableButtonCheck = () => {
  //   cart.map((cartItems) => {
  //     if (cartItems.id !== shoes.id) {
  //       console.log("item not included");
  //     } else {
  //       console.log("item is in cart");
  //     }
  //   });
  // };
  // disableButtonCheck();
  // console.log(shoes.length);
  const dispatch = useDispatch();
  return (
    <div className="box-design">
      <Row gutter={24}>
        {shoes.map((items) => (
          <Col span={6} key={items.id}>
            <Card
              hoverable
              style={{
                //     width: 300,
                height: 400,
                marginBottom: "20px",
              }}
              cover={
                <img
                  style={{ height: "190px" }}
                  alt={items.name}
                  // src\assets\images\card\img1.jpeg
                  src={items.img}
                />
              }
            >
              <div>
                <h1>{items.name}</h1>
                <h2>${items.price}</h2>
                <div className="starDiv">
                  <StarFilled style={{ fontSize: "20px", color: "orange" }} />
                  <StarFilled style={{ fontSize: "20px", color: "orange" }} />
                  <StarFilled style={{ fontSize: "20px", color: "orange" }} />
                  <StarFilled style={{ fontSize: "20px", color: "orange" }} />
                  <StarOutlined style={{ fontSize: "20px", color: "orange" }} />
                </div>
                <Button
                  type="button"
                  style={{ color: "white", background: "black" }}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: { items } })
                  }
                >
                  Add To Cart
                </Button>

                <Link to={`/details/${items.id}`}>
                  <Button
                    type="button"
                    style={{ color: "black", background: "white" }}
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProductCards;
