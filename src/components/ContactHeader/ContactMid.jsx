import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import data from "../../data/data";

const ContactMid = () => {
  return (
    <div>
      <div className="flex flex-col gap-20 py-16 text-center items-center">
        <div className="header">
          <div className="flex flex-col gap-[10px] font-bold">
            <h6 className="text-sm">VISIT OUR OFFICE</h6>
            <h2 className="px-9 text-[40px]">
              We help small businesses with big ideas
            </h2>
          </div>
        </div>
        <div className="flex cards">
          <div className="h-[343px] ">
            <div className="flex flex-col gap-[15px] py-[50px] px-10 text-[#252B42]">
              <FontAwesomeIcon className="text-7xl" icon={faPhone} />

              <div className="text-sm font-bold ">
                <p>{data.myStore.email}</p>
                <p>{data.myStore.email}</p>
              </div>
              <h5 className="font-bold text-base ">Get Support</h5>
              <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
                Submit Request
              </button>
            </div>
          </div>
          <div className="h-[403px] ">
            <div className="flex flex-col gap-[15px] py-[50px] px-10 bg-[#252B42] text-white">
              <i className="bx bx-current-location text-primary-color text-7xl"></i>
              <FontAwesomeIcon className="text-7xl" icon={faLocationDot} />
              <div className="text-sm font-bold ">
                <p>{data.myStore.email}</p>
                <p>{data.myStore.email}</p>
              </div>
              <h5 className="font-bold text-base ">Get Support</h5>
              <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
                Submit Request
              </button>
            </div>
          </div>
          <div className="h-[343px] ">
            <div className="flex flex-col gap-[15px] py-[50px] px-10 text-[#252B42]">
              <i className="bx bxs-envelope text-primary-color text-7xl"></i>
              <FontAwesomeIcon className="text-7xl" icon={faEnvelope} />
              <div className="text-sm font-bold ">
                <p>{data.myStore.email}</p>
                <p>{data.myStore.email}</p>
              </div>
              <h5 className="font-bold text-base ">Get Support</h5>
              <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMid;
