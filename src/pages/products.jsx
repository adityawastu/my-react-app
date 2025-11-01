import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/shoes_1.jpg",
    tittle: "sepatu Nike",
    price: "Rp. 1.000.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit?",
  },
  {
    id: 1,
    image: "/images/shoes_1.jpg",
    tittle: "Sepatu Adidas",
    price: "Rp. 500.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit?",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5 gap-2">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body tittle={product.tittle}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
