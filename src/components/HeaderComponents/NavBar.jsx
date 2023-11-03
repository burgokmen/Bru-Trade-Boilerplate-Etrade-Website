import { Link } from "react-router-dom";

import dropDownIcon from "../../assets/header-foot-icons/dropDownIcon.svg";

const NavBar = () => {
  return (
    <nav className="py-2 text-[14px]">
      <ul className="flex">
        <li className="pr-5">
          <Link to="/"> Home </Link>
        </li>
        <li className="flex pr-5">
          <Link to="/productList"> Shop </Link>
          <img className="pl-2" src={dropDownIcon} />
        </li>
        <li className="pr-5">
          <Link to="/"> About </Link>
        </li>
        <li className="pr-5">
          <Link to="/"> Blog </Link>
        </li>
        <li className="pr-5">
          <Link to="/"> Contact </Link>
        </li>
        <li>
          <Link to="/"> Pages </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
