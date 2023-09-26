import { useState } from "react";

import cartIcon from "../../assets/header-foot-icons/cart-icon.svg";
import loveIcon from "../../assets/header-foot-icons/love-icon.svg";
import searchIcon from "../../assets/header-foot-icons/search-icon.svg";
import loginIcon from "../../assets/header-foot-icons/login-icon.svg";

const HeaderComplex = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  return (
    <div className="text-[#23A6F0] flex">
      <div className="flex">
        <img src={loginIcon} />
        <span>Login / Register</span>
      </div>
      <img src={searchIcon} />
      <div className="flex">
        <img src={cartIcon} />
        {cartItemCount}
      </div>
      <div className="flex">
        <img src={loveIcon} />
        {loveCount}
      </div>
    </div>
  );
};

export default HeaderComplex;
