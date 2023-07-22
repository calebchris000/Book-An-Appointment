import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDescription } from "../../redux/productDescription/productDescriptionSlice";
import Loader from "../Loader/Loader";
import { TfiArrowCircleRight } from "react-icons/tfi";
import "./ProductDescription.css";
import { Link } from "react-router-dom";
export default function ProductDescription() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { productDescription, isLoading } = useSelector((store) => store.productDescription);

  useEffect(() => {
    dispatch(fetchProductDescription(id));
  }, [dispatch]);

  if (isLoading) {
    return (
      <h3>
        <Loader />
      </h3>
    );
  }
  //    if (isError) {
  //     return (
  //       <h3>Error Occured while fetchinng...</h3>
  //     );
  //   }
  return (
    <>
      {productDescription.map((element) => (
        <div key={element.id} className="detail-container">
          <div className="details-image-container">
            <img src={element.image} />
          </div>
          <div className="details-content-container">
            <h3>{element.model}</h3>

            <div className="details-description">
              <p>{element.description.slice(0, 100)}...</p>
            </div>

            <ul className="vehicle-info-details">
              <li>
                <p>Engine:</p> <p className="vehicle-info-data">{element.engine}</p>
              </li>
              <li>
                <p>Mileage:</p> <p className="vehicle-info-data">{element.mileage}</p>
              </li>
              <li>
                <p>Price:</p> <p className="vehicle-info-data">{element.price}</p>
              </li>
              <Link to={`/cars/${id}/reserve`} className="reserve-vehicle">
                <p>Reserve</p> <TfiArrowCircleRight className="arrow-right-reserve" />
              </Link>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
