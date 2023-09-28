const ProductHeader = () => {
  return (
    <div className="bg-[#FAFAFA] py-[24px] text-center">
      <div className="flex justify-between px-10">
        <h2 className="text-[24px] text-darkBlue">Shop</h2>
        <div className="flex justify-between">
          <h3 className="text-[14px] text-darkBlue pr-3">Home</h3>
          <i className="fa fa-chevron-right pr-3 pt-1 text-[#BDBDBD]"></i>
          <h4 className="text-[14px] text-[#BDBDBD]">Shop</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
