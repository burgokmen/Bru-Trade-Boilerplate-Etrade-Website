import data from "../../data/data";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <div className="px-[240px]">
      <div className="text-center">
        <h4 className="text-[20px] text-[#737373] font-normal">
          {data.bestSeller.h4}
        </h4>
        <h2 className="text-[24px] text-darkBlue">{data.bestSeller.h2}</h2>
        <h3 className="text-[14px] text-[#737373] font-normal">
          {data.bestSeller.h3}
        </h3>
      </div>
      <div className="flex flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSeller;
