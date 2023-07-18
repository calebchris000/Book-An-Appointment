import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDescription } from '../../redux/productDescription/productDescriptionSlice';
import Loader from '../Loader/Loader';

export default function ProductDescription() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const {productDescription, isLoading} = useSelector((store) => store.productDescription);

  useEffect(() => {
    dispatch(fetchProductDescription(id));
  }, [dispatch]);

  if (isLoading) {
    return (
      <h3><Loader/></h3>
    );}
//    if (isError) {
//     return (
//       <h3>Error Occured while fetchinng...</h3>
//     );
//   }
  return (
<>
    <div className='heading text-center'>
      <h3>
       Product Details {id}
      </h3>
      </div>

      {productDescription.map((element) => (

        <div key={element.id} className=" container-md display-flex justify-content-center">
            <div className='display-flex justify-content-center'>
        <img src = {element.image}/>
              </div>
              <div className='container-car-details'>
          <li>
            <div>Brand Name</div>
            <div>
              {element.name}
            </div>
          </li>
          <li>
            
          </li>
          <li>
            <div>Description</div>
                       <div>
              {element.description}
             
            </div>
          </li>
          <li>
            <div>Model </div>
            <div>
              {element.model}
             
            </div>
          </li>
          <li>
            <div>Engine </div>
            <div>
              {element.engine}
             
            </div>
          </li>
          <li>
            <div>Mileage</div>
            <div>
              {element.mileage}
            
            </div>
          </li>
          <li>
            <div>Price </div>
            <div>
              {element.price}
             
            </div>
          </li>
          </div>
        </div>
      ))}
    </>
  );
}
