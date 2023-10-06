import ProductBlog from "../components/ProductPages/ProductBlog";
import ProductDescription from "../components/ProductPages/ProductDescription";
import BestSeller from "../components/HomePageBodyComponents/BestSeller";

const ProductPage = () => {
  return (
    <>
      <ProductDescription />
      <ProductBlog />
      <BestSeller />
    </>
  );
};

export default ProductPage;
