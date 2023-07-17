import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/productDetails/productDetailsSlice';

export default function ProductDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const {productDetails, isLoading} = useSelector((store) => store.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [dispatch]);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );}
//    if (isError) {
//     return (
//       <h3>Error Occured while fetchinng...</h3>
//     );
//   }
  return (
    <div>
      <h3>
        {id}
        {' '}
        Product Details
      </h3>

      {productDetails.map((element) => (

        <div key={element.id} className="stock-details">

          <li>
            <div>Symbol </div>
            <div>
              {element.name}
              {' '}
            </div>
          </li>
          <li>
            <div>Name </div>
            <div>
              {element.image}
              {' '}
            </div>
          </li>
          <li>
            {' '}
            <div>Price</div>
            {' '}
            <div>
              {element.description}
              {' '}
            </div>
          </li>
          <li>
            <div>Changes Percentage </div>
            <div>
              {element.mileage}
              {' '}
            </div>
          </li>
          <li>
            <div>Change </div>
            <div>
              {element.model}
              {' '}
            </div>
          </li>
          <li>
            <div>Volume </div>
            <div>
              {element.price}
              {' '}
            </div>
          </li>
          <li>
            <div>Day Low </div>
            <div>
              {element.engine}
              {' '}
            </div>
          </li>
          <li>
            <div> Day High </div>
            <div>
              {element.engine}
              {' '}
            </div>
          </li>
          <li>
            <div>Year Low </div>
            <div>
              {element.price}
              {' '}
            </div>
          </li>
          <li>
            <div>Year High </div>
            <div>
              {element.price}
              {' '}
            </div>
          </li>

        </div>
      ))}
    </div>
  );
}
