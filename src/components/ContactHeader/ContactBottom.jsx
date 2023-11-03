import { Link } from "react-router-dom";

const ContactBottom = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center pb-20 text-[#252B42]">
        <div className="flex flex-col gap-9 font-bold mt-2">
          <h5 className=" text-base">WE Can't WAIT TO MEET YOU</h5>
          <h2 className=" text-6xl">Let’s Talk</h2>
          <Link
            className="bg-babyBlue text-white py-[15px] px-10 text-sm w-[186px] m-auto"
            to="/pricing"
          >
            Try it free now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBottom;
