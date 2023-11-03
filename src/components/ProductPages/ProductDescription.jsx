import { useEffect, useState } from "react";
import { Button, IconButton, Rating } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

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
        <ProductCarousel />

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

          <div className="flex gap-4">
            <Button color="blue">Select Options</Button>
            {/*    <IconButton variant="outlined" className="rounded-full">
              <i className="fa fa-heart" />
            </IconButton>
            <IconButton variant="outlined" className="rounded-full">
              <i className="fa-cart-shopping" />
            </IconButton> */}
            <FontAwesomeIcon
              icon={faHeart}
              className="border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="border border-solid border-neutral rounded-[45px] w-5 h-5 p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
