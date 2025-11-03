import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow-lg flex flex-col justify-between m-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="sepatu" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { tittle, children } = props;
  return (
    <div className="px-5 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold mb-3">{tittle}</h5>
        <p>{children}</p>
      </a>
    </div>
  );
};
const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between p-5">
      <span className="text-2xl font-bold">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}
      </span>
      <Button classname="bg-blue-500" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
