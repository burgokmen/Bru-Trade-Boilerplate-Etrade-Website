import faceIconSvg from "../assets/header-top-icons/face-icon.svg";
import instaIconSvg from "../assets/header-top-icons/insta-icon.svg";
import mailIconSvg from "../assets/header-top-icons/mail-icon.svg";
import phoneIconSvg from "../assets/header-top-icons/phone-icon.svg";
import twitterIconSvg from "../assets/header-top-icons/twitter-icon.svg";
import youtubeIconSvg from "../assets/header-top-icons/youtube-icon.svg";
import data from "../data/data";

const HeaderTop = () => {
  return (
    <div className="bg-darkBlue text-white w-auto">
      <div className="px-[1.5rem] flex justify-between">
        <div className="flex">
          <img src={phoneIconSvg} alt="Phone" />
          {data.myStore.phoneNumber}
          <img src={mailIconSvg} alt="Phone" />
          {data.myStore.email}
        </div>
        <div>{data.myStore.discountLetter}</div>
        <div className="flex">
          Follow Us :
          <img src={instaIconSvg} alt="Phone" />
          <img src={youtubeIconSvg} alt="Phone" />
          <img src={faceIconSvg} alt="Phone" />
          <img src={twitterIconSvg} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
