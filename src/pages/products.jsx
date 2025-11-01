import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "/images/shoes_1.jpg",
    tittle: "sepatu Nike",
    price: "Rp. 1.000.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit?",
  },
  {
    id: 2,
    image: "/images/shoes_1.jpg",
    tittle: "Sepatu Adidas",
    price: "Rp. 500.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit?",
  },
];
const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="h-15 bg-blue-500 flex justify-end text-white items-center gap-2 px-5">
        {email}
        <Button classname="bg-red-700" onClick={handleLogut}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-2">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body tittle={product.tittle}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
