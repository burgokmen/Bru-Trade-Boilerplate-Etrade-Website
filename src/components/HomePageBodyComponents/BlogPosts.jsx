import data from "../../data/data";

const BlogPosts = () => {
  return (
    <div className="py-[112px]">
      <div className="text-center">
        <h4 className="text-[14px] text-babyBlue font-normal">
          {data.blogPost.h4}
        </h4>
        <h2 className="text-[40px] text-darkBlue">{data.blogPost.h2}</h2>

        <p className="w-[469px] text-[14px] text-[#737373] font-normal inline-block">
          {data.blogPost.p}
        </p>
      </div>
      <div>//TODO maplenecek blog postlar</div>
    </div>
  );
};

export default BlogPosts;
