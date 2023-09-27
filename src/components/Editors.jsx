import { Button } from "@material-tailwind/react";
import data from "../data/data";

const Editors = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-[24px] text-darkBlue">{data.editorsPick.h2}</h2>
        <h3 className="text-[14px] text-[#737373] font-normal">
          {data.editorsPick.h3}
        </h3>
      </div>
      <div className="px-[195px] pt-[48px] flex">
        <div className="relative">
          <img
            className="h-[500px] w-[509px] object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />

          <Button className="absolute bottom-5 left-5" color="white">
            <span className="text-darkBlue text-[16px]">MEN</span>
          </Button>
        </div>

        <div className="px-[30px] relative">
          <img
            className="h-[500px] w-[239px] object-cover object-center"
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="nature image"
          />
          <Button className="absolute bottom-5 left-10" color="white">
            <span className="text-darkBlue text-[16px]">WOMEN</span>
          </Button>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative">
            <img
              className="h-[242px] w-[239px] object-cover object-center"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="nature image"
            />
            <Button className="absolute bottom-5 left-2" color="white">
              <span className="text-darkBlue text-[16px]">ACCESORIES</span>
            </Button>
          </div>
          <div className="relative">
            <img
              className="h-[242px] w-[239px] object-cover object-center"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="nature image"
            />
            <Button className="absolute bottom-5 left-2" color="white">
              <span className="text-darkBlue text-[16px]">KIDS</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editors;
