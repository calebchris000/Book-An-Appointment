import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, deleteProduct } from '../redux/productDetails/productDetailsSlice'
function DeleteCar(){
const {Products} = useSelector((store) => store.productDetails) || [];
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
      .then(() => {
        dispatch(fetchProductDetails());
      });
  };
  if (Products.length == 0){
  return <h3>There are no Cars</h3>
  }
return (
    <div >
      <h1 >Remove car</h1>
      <ul>
      {Products.map((product) =>
  <li>
<h3>{product.name}</h3>
<img src = {product.image} alt = {product.name} style={{ width: '50px', height: '50px' }}/>
<button className="btn btn-danger" type="button" onClick={() => handleDelete(product.id)}>
              Delete Car
            </button>
  </li>
      )}
      </ul>
    </div>
  );
};
export default DeleteCar;
