import { Carousel as MyCarousel } from "antd";
const contentStyle = {
  height: "500px",
  color: "#fff",
  width: "100%",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousel = (props) => {
  return (
    <MyCarousel autoplay>
      <div>
        <img
          style={contentStyle}
          src="https://vue-app-ecommerce.web.app/img/c2.5b46d64c.jpeg"
          alt="img1"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://vue-app-ecommerce.web.app/img/c1.83fbf87d.jpeg"
          alt="img2"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://vue-app-ecommerce.web.app/img/c3.c5eaf478.jpeg"
          alt="img3"
        />
      </div>
    </MyCarousel>
  );
};
export default Carousel;
