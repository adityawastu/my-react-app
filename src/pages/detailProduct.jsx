import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);
  return (
    // Container Latar Belakang & Penengah
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl rounded-lg bg-white p-6 shadow-lg lg:w-3/4">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <img src={product.image} alt="{product.title}" className="h-auto w-full rounded-lg shadow-md" />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              {product.category}
            </span>
            <h1 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">{product.title}</h1>
            <div className="mb-4 text-3xl font-extrabold text-blue-600">$ {product.price}</div>
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Deskripsi</h2>
            <p className="mb-6 leading-relaxed text-gray-600">{product.description}</p>
            <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
