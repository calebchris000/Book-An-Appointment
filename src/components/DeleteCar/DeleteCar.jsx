import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, deleteProduct } from "../../redux/productDetails/productDetailsSlice";
import { setAuth } from "../../redux/authSlice";
import "./DeleteCar.css";
function DeleteCar() {
  const { Products } = useSelector((store) => store.productDetails) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth());
    dispatch(fetchProductDetails());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(fetchProductDetails());
    });
  };
  if (Products.length == 0) {
    return <h3>There are no Cars</h3>;
  }
  return (
    <div className="remove-car-container">
      <h1 className="remove-car-title">Remove Car</h1>
      <ul className="remove-car-list">
        {Products.map((product) => (
          <li key={product.id} className="remove-car-item">
            <div className="car-details">
              <h3 className="car-name">{product.name}</h3>
              <img className="car-image" src={product.image} alt={product.name} />
            </div>
            <button className="delete-btn" type="button" onClick={() => handleDelete(product.id)}>
              Delete Car
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DeleteCar;
