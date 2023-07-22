import { useParams } from "react-router-dom";
import ReservationForm from "../ReservationForm";
import { useSelector } from "react-redux";
import "./ReserveProduct.css";

const ReserveProduct = () => {
  const { id } = useParams();
  const { Products } = useSelector((store) => store.productDetails) || [];
  const selectedProduct = Products.find((product) => product.id === parseInt(id, 10));

  return (
    <section className="reserve-product-form">

      <ReservationForm selectedProductID={id} selectedCar={selectedProduct} />
    </section>
  );
};

export default ReserveProduct;
