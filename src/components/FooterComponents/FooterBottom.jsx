import data from "../../data/data";

const FooterBottom = () => {
  return (
    <div>
      <span className="text-[14px] px-[195px] py-[40px] text-[#737373] bg-[#FAFAFA]">
        {data.copyright}
      </span>
    </div>
  );
};

export default FooterBottom;
