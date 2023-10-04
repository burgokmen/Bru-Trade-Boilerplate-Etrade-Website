import productBlog1 from "../../assets/aProduct/productBlog1.png";
import data from "../../data/data";

const ProductBlog = () => {
  function blogPostmaker() {
    return (
      <div className="flex pb-3">
        <i className="fa fa-chevron-right pr-3 pt-1 text-[#BDBDBD]"></i>
        <h5 className="text-grey73 text-[14px]">{data.aProduct.blog.hp}</h5>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center gap-8 py-[40px]">
        <h3 className="text-grey73 text-[14px]">
          {data.aProduct.blog.description}
        </h3>
        <h3 className="text-grey73 text-[14px]">
          {data.aProduct.blog.extraInfo}
        </h3>
        <h3 className="text-grey73 text-[14px]">
          {data.aProduct.blog.review} (0)
        </h3>
      </div>
      <div className="flex px-[195px] justify-between">
        <img className="w-[316px] h-[372px]" src={productBlog1} />
        <div>
          <h4 className="text-darkBlue text-[24px]">{data.aProduct.blog.h4}</h4>
          <div className="w-[332px] h-[340px] pt-[30px]">
            <p className="text-grey73 text-[14px] pb-7 font-normal">
              {data.aProduct.blog.p1}
            </p>
            <p className="text-grey73 text-[14px] pb-7 font-normal">
              {data.aProduct.blog.p2}
            </p>
            <p className="text-grey73 text-[14px] pb-7 font-normal">
              {data.aProduct.blog.p3}
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-darkBlue text-[24px] pb-[30px] ">
            {data.aProduct.blog.h4}
          </h4>
          {blogPostmaker()}
          {blogPostmaker()}
          {blogPostmaker()}
          {blogPostmaker()}
          <h4 className="text-darkBlue text-[24px] pb-[30px] ">
            {data.aProduct.blog.h4}
          </h4>
          {blogPostmaker()}
          {blogPostmaker()}
        </div>
      </div>
    </>
  );
};

export default ProductBlog;
