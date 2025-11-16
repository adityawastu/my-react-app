import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

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

  return (
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
                  {/* <Button classname="bg-red-600" onClick={() => handleRemoveFromCart(item.id)}>
                    Hapus
                  </Button> */}
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
  );
};

export default TableCart;
