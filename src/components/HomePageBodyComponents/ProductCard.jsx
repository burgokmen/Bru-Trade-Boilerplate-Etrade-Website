import data from "../../data/data";

const ProductCard = () => {
  return (
    <div className="py-[80px] pr-[30px] w-[239px] h-[615px] text-center">
      <img className="w-[239px] h-[427px]" src={data.bestSeller.mapArr.pic} />
      <h5 className="text-darkBlue">{data.bestSeller.mapArr.h5}</h5>
      <h6 className="text-[14px] text-[#737373]">
        {data.bestSeller.mapArr.h6}
      </h6>
      <div className="flex justify-center">
        <span className="text-[#BDBDBD] pr-2">
          {data.bestSeller.mapArr.price}
        </span>
        <span className="text-[#23856D]">
          {data.bestSeller.mapArr.priceDiscounted}
        </span>
      </div>
      <div className="flex justify-center">
        <i className="pr-2 fa fa-circle text-babyBlue"></i>
        <i className="pr-2 fa fa-circle text-[#23856D]"></i>
        <i className="pr-2 fa fa-circle text-[#E77C40]"></i>
        <i className=" fa fa-circle text-[#252B42]"></i>
      </div>
    </div>
  );
};

export default ProductCard;
