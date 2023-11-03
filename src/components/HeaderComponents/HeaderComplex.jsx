import { useState } from "react";

import cartIcon from "../../assets/header-foot-icons/cart-icon.svg";
import loveIcon from "../../assets/header-foot-icons/love-icon.svg";
import searchIcon from "../../assets/header-foot-icons/search-icon.svg";
import loginIcon from "../../assets/header-foot-icons/login-icon.svg";

const HeaderComplex = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  return (
    <div className="text-babyBlue flex">
      <div className="px-[10px] flex">
        <img src={loginIcon} />
        <span className="font-bold px-1">Login / Register</span>
      </div>
      <img className="px-[10px]" src={searchIcon} />
      <div className="px-[10px] flex">
        <img src={cartIcon} />
        <span className="font-normal px-1">{cartItemCount}</span>
      </div>
      <div className="px-[10px] flex">
        <img src={loveIcon} />
        <p className="font-normal px-1">{loveCount}</p>
      </div>
    </div>
  );
};

export default HeaderComplex;
