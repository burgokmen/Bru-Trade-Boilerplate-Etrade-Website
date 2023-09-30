import { useEffect, useState } from "react";
import { Button, Rating } from "@material-tailwind/react";
import smallProduct from "../../assets/aProduct/single-product-small.jpg";
import ProductJpg from "../../assets/aProduct/singleProduct.jpg";
import data from "../../data/data";

import ProductCarousel from "./ProductCarousel";

const ProductDescription = () => {
  const initialRatings = JSON.parse(localStorage.getItem("ratings") || "[]");

  const [rated, setRated] = useState(initialRatings);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(rated));
  }, [rated]);

  return (
    <div className="bg-[#FAFAFA] px-[13.5%]">
      <div className="flex justify-start py-[1.5em] ">
        <h3 className="text-[14px] text-darkBlue pr-3">Home</h3>
        <i className="fa fa-chevron-right pr-3 pt-1 text-[#BDBDBD]"></i>
        <h4 className="text-[14px] text-[#BDBDBD]">Shop</h4>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="w-[506px] h-[450px]">
          <ProductCarousel />
          <div className="flex py-[21px]">
            <img className="w-[100px] h-[75px] pr-[19px]" src={smallProduct} />
            <img className="w-[100px] h-[75px]" src={ProductJpg} />
          </div>
        </div>
        <div>
          <div className="w-[506px] h-[450px] flex flex-col gap-3">
            <h2 className="text-darkBlue text-[20px] font-normal">
              {data.aProduct.h2}
            </h2>
            <div className="flex">
              <Rating
                value={4}
                onChange={(value) => setRated(value)}
                unratedColor="blue"
                ratedColor="blue"
              />
              <span className="pl-[0.5rem] text-[14px] text-[#737373]">
                {data.aProduct.review}
              </span>
            </div>
            <span className="text-darkBlue text-[24px] ">
              {data.aProduct.price}
            </span>
            <div className="flex gap-2">
              <span className="text-[14px] text-[#737373] ">
                {data.aProduct.availability}
              </span>
              <span className="text-[14px] text-babyBlue">
                {data.aProduct.isStock}
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#858585]">
              {data.aProduct.p}
            </p>
            <hr className="border-solid border-2 border-sky-500 " />
            <div className="flex gap-2">
              <i className=" fa fa-circle text-babyBlue"></i>
              <i className=" fa fa-circle text-[#23856D]"></i>
              <i className=" fa fa-circle text-[#E77C40]"></i>
              <i className=" fa fa-circle text-[#252B42]"></i>
            </div>
          </div>
          <div>
            <Button color="blue">Select Options</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
