import data from "../../data/data";
import faceIconSvg from "../../assets/header-top-icons/face-icon.svg";
import instaIconSvg from "../../assets/header-top-icons/insta-icon.svg";
import twitterIconSvg from "../../assets/header-top-icons/twitter-icon.svg";

const FooterTop = () => {
  return (
    <div className="flex h-[142px] px-[195px] py-[40px] justify-between items-center bg-[#FAFAFA]">
      <h1 className="text-[24px] text-[#252B42]">{data.brand.name}</h1>
      <div className="flex p-[10px] ">
        <img
          className="px-[10px] stroke-cyan-500 "
          src={instaIconSvg}
          alt="Phone"
        />
        <img className="px-[10px]" src={faceIconSvg} alt="Phone" />
        <img className="px-[10px]" src={twitterIconSvg} alt="Phone" />
      </div>
    </div>
  );
};

export default FooterTop;
