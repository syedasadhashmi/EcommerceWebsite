import { useParams } from "react-router-dom";

const Details = (props) => {
  const { id } = useParams();

  return (
    <div>
      <h1>Shoe Detail-{id}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default Details;
