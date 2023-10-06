import data from "../../data/data";
import PricingComp from "./PricingComp";

const Pricing = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="py-[15px] text-grey73 ">{data.pricing.h3}</h3>
        <h2 className="py-[15px] text-[56px] text-darkBlue ">
          {data.pricing.h2}
        </h2>
        <div className="flex justify-center py-[15px]">
          <h3 className="text-[14px] text-darkBlue pr-3">Home</h3>
          <i className="fa fa-chevron-right pr-3 pt-1 text-[#BDBDBD]"></i>
          <h4 className="text-[14px] text-[#BDBDBD]">Pricing</h4>
        </div>
      </div>
      <PricingComp />
    </div>
  );
};

export default Pricing;
