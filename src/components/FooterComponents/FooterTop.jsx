import data from "../../data/data";

const FooterTop = () => {
  return (
    <div className="flex h-[142px] px-[195px] py-[40px] justify-between items-center bg-[#FAFAFA]">
      <h1 className="text-[24px] text-[#252B42]">{data.brand.name}</h1>
      <div className="flex p-[10px] text-babyBlue ">
        <i className="fa fa-instagram pr-5"></i>
        <i className="fa fa-youtube pr-5"></i>
        <i className="fa fa-twitter"></i>
      </div>
    </div>
  );
};

export default FooterTop;
