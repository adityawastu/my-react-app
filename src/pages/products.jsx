import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header></CardProduct.Header>
        <CardProduct.Body tittle="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero repudiandae animi autem tenetur
          quisquam aut fugit repellendus sint similique.
        </CardProduct.Body>
        <CardProduct.Footer></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
