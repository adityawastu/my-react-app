import { Fragment, useEffect, useState, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

//ini adalah penggunaan state pada stateless
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();

  const handleRemoveFromCart = (id) => {
    if (cart.find((item) => item.id === id).qty > 1) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item)));
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const handleLogut = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <div className="h-15 bg-blue-500 flex justify-end text-white items-center gap-5 px-5">
        {username}
        <Button classname="bg-red-700" onClick={handleLogut}>
          Log Out
        </Button>
      </div>
      <div className="flex w-full p-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 mb-10">Cart</h1>
          <TableCart products={products} Button classname="bg-blue-500" />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
