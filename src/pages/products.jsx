import { Fragment, useEffect, useState, useRef } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";

// const products = [
//   {
//     id: 1,
//     image: "/images/shoes_nike.jpg",
//     tittle: "Sepatu Lari Nike Pegasus 40",
//     price: 1550000,
//     description: "Sepatu lari performa tinggi dengan bantalan responsif, ideal untuk lari jarak menengah dan maraton.",
//   },
//   {
//     id: 2,
//     image: "/images/shoes_adidas.jpg",
//     tittle: "Sepatu Training Adidas Ultraboost",
//     price: 1200000,
//     description: "Sepatu serbaguna untuk training dan gaya hidup, memberikan pengembalian energi maksimal.",
//   },
//   {
//     id: 3,
//     image: "/images/shirt_polo.jpg",
//     tittle: "Kaos Polo Katun Premium",
//     price: 285000,
//     description: "Kaos polo dengan bahan katun piqué yang nyaman dan desain kerah klasik.",
//   },
//   {
//     id: 4,
//     image: "/images/jeans_slim.jpg",
//     tittle: "Celana Jeans Pria Slim Fit",
//     price: 499000,
//     description: "Jeans denim stretch dengan potongan modern slim fit, cocok untuk kasual sehari-hari.",
//   },
//   {
//     id: 5,
//     image: "/images/laptop_pro.jpg",
//     tittle: "Laptop Gaming Spectre X",
//     price: 25999000,
//     description: "Laptop bertenaga tinggi dengan kartu grafis terbaru, didesain untuk gaming dan editing profesional.",
//   },
//   {
//     id: 6,
//     image: "/images/watch_digital.jpg",
//     tittle: "Jam Tangan Digital Sporty",
//     price: 350000,
//     description:
//       "Jam tangan tahan air dengan fitur stopwatch, alarm, dan tampilan LED, cocok untuk aktivitas luar ruangan.",
//   },
//   {
//     id: 7,
//     image: "/images/bag_backpack.jpg",
//     tittle: "Tas Ransel Laptop Anti Air",
//     price: 450000,
//     description: "Ransel kapasitas besar dengan kompartemen laptop 15 inch dan bahan anti air.",
//   },
//   {
//     id: 8,
//     image: "/images/headphone_noise.jpg",
//     tittle: "Headphone Bluetooth Noise Cancelling",
//     price: 950000,
//     description: "Headphone over-ear nirkabel dengan teknologi peredam bising aktif untuk kualitas suara superior.",
//   },
//   {
//     id: 9,
//     image: "/images/smartphone_x.jpg",
//     tittle: "Smartphone X Pro 128GB",
//     price: 8700000,
//     description: "Ponsel cerdas dengan kamera 50MP, baterai tahan lama, dan layar AMOLED yang jernih.",
//   },
//   {
//     id: 10,
//     image: "/images/powerbank_20k.jpg",
//     tittle: "Power Bank Fast Charging 20000mAh",
//     price: 325000,
//     description: "Power bank berkapasitas besar dengan fitur pengisian cepat, aman untuk dibawa bepergian.",
//   },
// ];

const email = localStorage.getItem("email");

//ini adalah penggunaan state pada stateless
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

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
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  //membutuhkan hooks untuk membuat use state
  //use reff
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartReff = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

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
  return (
    <Fragment>
      <div className="h-15 bg-blue-500 flex justify-end text-white items-center gap-5 px-5">
        {email}
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
                {/* <th className="p-3 text-left">Price</th> */}
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
                      {/* <td className="p-3 text-left">{product.price}</td> */}
                      <td className="p-3 text-left">{item.qty}</td>
                      <td className="p-3 text-left">
                        {(item.qty * product.price).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
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
                    maximumFractionDigits: 0,
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
