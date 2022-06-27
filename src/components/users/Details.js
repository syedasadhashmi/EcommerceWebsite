import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';

const Details = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((shoes) => shoes.productsReducer);
  console.log(details);
  useEffect(() => {
    dispatch({ type: 'DETAILS', id: id });
  }, [id]);
  return (
    <div>
      <h1>
        {details.name}
        {id}
      </h1>
      <p>{details.desc}</p>
    </div>
  );
};
export default Details;
