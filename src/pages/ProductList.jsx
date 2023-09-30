import ProductCard from "../components/HomePageBodyComponents/ProductCard";
import Pagination from "../components/ProductListPageComponents/Pagination";
import ProductHeader from "../components/ProductListPageComponents/ProductHeader";
import ShopCategory from "../components/ProductListPageComponents/ShopCategory";
import ShopFilter from "../components/ProductListPageComponents/ShopFilter";

const ProductListPage = () => {
  return (
    <>
      <ProductHeader />
      <ShopCategory />
      <ShopFilter />

      <div className="flex justify-between flex-wrap px-[195px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Pagination />
    </>
  );
};

export default ProductListPage;
