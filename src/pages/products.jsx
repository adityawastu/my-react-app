import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "/images/shoes_1.jpg",
    tittle: "sepatu Nike",
    price: 1000000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit?",
  },
  {
    id: 2,
    image: "/images/shoes_1.jpg",
    tittle: "Sepatu Adidas",
    price: 500000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit?",
  },
];

const email = localStorage.getItem("email");

//ini adalah penggunaan state pada stateless
const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 2,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id,
        qty: 1,
      },
    ]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleLogut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  //membutuhkan hooks untuk membuat use state

  return (
    <Fragment>
      <div className="h-15 bg-blue-500 flex justify-end text-white items-center gap-5 px-5">
        {email}
        <Button classname="bg-red-700" onClick={handleLogut}>
          Log Out
        </Button>
      </div>
      <div className="flex w-full p-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body tittle={product.tittle}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-bold text-blue-600 mb-10">Cart</h1>
          <table>
            <thead>
              <tr className=" bg-blue-50 ">
                <th className="p-3 text-left">Product</th>
                {/* <th className="p-3 text-left">Price</th> */}
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td className="p-3 text-left">{product.tittle}</td>
                    {/* <td className="p-3 text-left">{product.price}</td> */}
                    <td className="p-3 text-left">{item.qty}</td>
                    <td className="p-3 text-left">{item.qty * product.price}</td>
                    <td className="p-3 text-left">
                      {" "}
                      <Button classname="bg-red-600" onClick={() => handleRemoveFromCart(item.id)}>
                        Hapus
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
