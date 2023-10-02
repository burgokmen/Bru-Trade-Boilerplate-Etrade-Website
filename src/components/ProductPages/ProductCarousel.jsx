import { Carousel } from "@material-tailwind/react";
import productJpg from "../../assets/aProduct/singleProduct.jpg";
import smallProduct from "../../assets/aProduct/single-product-small.jpg";
import ProductJpg from "../../assets/aProduct/singleProduct.jpg";

const ProductCarousel = () => {
  return (
    <div>
      <div className="w-[506px] h-[450px]">
        <Carousel
          className=""
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={productJpg}
            alt="image 1"
            className="h-full w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="flex py-[21px]">
        <img className="w-[100px] h-[75px] pr-[19px]" src={smallProduct} />
        <img className="w-[100px] h-[75px]" src={ProductJpg} />
      </div>
    </div>
  );
};

export default ProductCarousel;
