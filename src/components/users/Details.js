import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { detail } from "../../redux/products/productAction";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((shoes) => shoes.productsReducer);
  useEffect(() => {
    dispatch(detail(id));
  }, [id, dispatch]);
  return (
    <div>
      <h1>
        {details.name}
        {id}
      </h1>
      <img src={details.img} className="detailsImg" alt={details.name} />
      <p>{details.desc}</p>
    </div>
  );
};
export default Details;
