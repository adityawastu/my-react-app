import { Fragment, useEffect, useState, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

//ini adalah penggunaan state pada stateless
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

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
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart)); //untuk memasukkan ke dalam local storage
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
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
                <CardProduct.Header image={product.image} />
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 mb-10">Cart</h1>
          {/* head dari table nya  */}
          <table>
            <thead>
              <tr className=" bg-blue-50 ">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td className="p-3 text-left">{product.title}</td>
                      <td className="p-3 text-left">{product.price}</td>
                      <td className="p-3 text-left">{item.qty}</td>
                      <td className="p-3 text-left">
                        {(item.qty * product.price).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="p-3 text-left">
                        <Button classname="bg-red-600" onClick={() => handleRemoveFromCart(item.id)}>
                          Hapus
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-3 text-left" colSpan={3}>
                  Total Price
                </td>
                <td className="p-3 text-left">
                  {" "}
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
