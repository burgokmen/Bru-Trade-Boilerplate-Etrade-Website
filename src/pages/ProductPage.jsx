import ProductCarousel from "../components/ProductPages/ProductCarousel";
import smallProduct from "../assets/aProduct/single-product-small.jpg";
import ProductJpg from "../assets/aProduct/singleProduct.jpg";

const ProductPage = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] px-[13.5%]">
        <div className="flex justify-start py-[1.5em] ">
          <h3 className="text-[14px] text-darkBlue pr-3">Home</h3>
          <i className="fa fa-chevron-right pr-3 pt-1 text-[#BDBDBD]"></i>
          <h4 className="text-[14px] text-[#BDBDBD]">Shop</h4>
        </div>
        <div className="flex justify-between">
          <div className="w-[506px] h-[450px]">
            <ProductCarousel />
            <div className="flex py-[21px]">
              <img
                className="w-[100px] h-[75px] pr-[19px]"
                src={smallProduct}
              />
              <img className="w-[100px] h-[75px]" src={ProductJpg} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default ProductPage;
