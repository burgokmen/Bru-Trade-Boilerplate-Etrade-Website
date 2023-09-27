import data from "../../data/data";
import HeaderComplex from "./HeaderComplex";
import NavBar from "./NavBar";

const HeaderFoot = () => {
  return (
    <div className="flex px-[1.5rem] justify-between">
      <h1 className="text-[24px] text-[#252B42]">{data.brand.name}</h1>
      <NavBar />
      <HeaderComplex />
    </div>
  );
};

export default HeaderFoot;
