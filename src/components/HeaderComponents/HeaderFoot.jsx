import data from "../../data/data";
import HeaderComplex from "./HeaderComplex";
import NavBar from "./NavBar";

const HeaderFoot = () => {
  return (
    <div className="flex px-[1.5rem] h-[45px] justify-between">
      <h1 className="text-[24px] text-[#252B42]">{data.brand.name}</h1>
      <NavBar />
      <div className="text-[14px] py-2">
        <HeaderComplex />
      </div>
    </div>
  );
};

export default HeaderFoot;
