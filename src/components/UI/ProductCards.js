import { Button, Card, Col, Row } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../redux/cart/cartActions";
import "./ProductCards.css";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const { shoes } = useSelector((shoes) => shoes.productsReducer);
  const { cart } = useSelector((state) => state.cartReducer);
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
                {/* {items.stock === 0 && (
                  <Button
                    type="button"
                    disabled
                    style={{ color: "black", background: "orange" }}
                    onClick={() => dispatch(addToCart({ items }))}
                  >
                    Out Of Stock
                  </Button>
                )} */}
                {cart.some((x) => x.id === items.id) ? (
                  <Button
                    type="button"
                    disabled
                    style={{ color: "black", background: "orange" }}
                    // onClick={() => dispatch(addToCart({ items }))}
                  >
                    Added To Cart
                  </Button>
                ) : (
                  <Button
                    type="button"
                    style={{ color: "white", background: "black" }}
                    onClick={() => dispatch(addToCart({ items: { ...items } }))}
                  >
                    Add To Cart
                  </Button>
                )}
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
