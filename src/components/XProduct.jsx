import { Button } from "@material-tailwind/react";
import data from "../data/data";

const XProduct = () => {
  return (
    <div className="flex justify-evenly">
      <img
        className="h-[600px] w-[725px] object-cover object-center"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-[1rem] text-[#BDBDBD] ">{data.xProduct.h2}</h2>
        <h3 className="text-[40px] w-[375px] text-darkBlue">
          {data.xProduct.h3}
        </h3>
        <h4 className="font-normal w-[375px] text-[20px] ">
          {data.xProduct.p}
        </h4>
        <div>
          <Button className="g-[35px]" color="green">
            <span className="text-[14px]">BUY NOW</span>
          </Button>
          <Button variant="outlined" className="g-[35px]" color="green">
            <span className="text-[14px]">READ MORE</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default XProduct;
