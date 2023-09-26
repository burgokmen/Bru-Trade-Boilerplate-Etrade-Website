import faceIconSvg from "../../assets/header-top-icons/face-icon.svg";
import instaIconSvg from "../../assets/header-top-icons/insta-icon.svg";
import mailIconSvg from "../../assets/header-top-icons/mail-icon.svg";
import phoneIconSvg from "../../assets/header-top-icons/phone-icon.svg";
import twitterIconSvg from "../../assets/header-top-icons/twitter-icon.svg";
import youtubeIconSvg from "../../assets/header-top-icons/youtube-icon.svg";
import data from "../../data/data";

const HeaderTop = () => {
  return (
    <div className="bg-darkBlue text-white h-10 text-[14px]">
      <div className="px-[1.5rem] flex justify-between">
        <div className="flex ">
          <div className="flex p-[10px]">
            <img className="p-[3px]" src={phoneIconSvg} alt="Phone" />
            {data.myStore.phoneNumber}
          </div>
          <div className="flex p-[10px]">
            <img className="p-[3px]" src={mailIconSvg} alt="Phone" />
            <a href="mailto:brunogokmen@gmail.com " target="/blank">
              {data.myStore.email}
            </a>
          </div>
        </div>
        <div className="p-[10px]">{data.myStore.discountLetter}</div>
        <div className="flex p-[10px]">
          <span className="pe-2">Follow Us :</span>
          <img className="px-[10px]" src={instaIconSvg} alt="Phone" />
          <img className="px-[10px]" src={youtubeIconSvg} alt="Phone" />
          <img className="px-[10px]" src={faceIconSvg} alt="Phone" />
          <img className="px-[10px]" src={twitterIconSvg} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
