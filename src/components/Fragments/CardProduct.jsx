import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow-lg flex flex-col justify-between m-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="sepatu" className="p-8 rounded-t-lg h-60 w-full object-contain" />
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-5 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold mb-3">{title.substring(0, 20)} ...</h5>
        <p>{children.substring(0, 100)} ...</p>
      </a>
    </div>
  );
};
const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between p-5">
      <span className="text-2xl font-bold">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      <Button classname="bg-blue-500" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
