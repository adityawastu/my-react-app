import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow-lg">{children}</div>;
};

const Header = () => {
  return (
    <a href="">
      <img src="/images/shoes_1.jpg" alt="sepatu" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-5">
      <a href="">
        <h5 className="text-2xl font-semibold mb-3">{title}</h5>
        <p>{children}</p>
      </a>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <span className="text-2xl font-bold">Rp.750.000</span>
      <Button classname="bg-blue-500">Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
