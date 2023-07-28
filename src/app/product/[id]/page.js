import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store", //serverSideProps
  });
  const data = await res.json(res);

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default ProductDetailPage;
