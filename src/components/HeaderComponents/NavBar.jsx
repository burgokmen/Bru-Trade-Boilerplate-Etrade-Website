import { Link } from "react-router-dom";

import dropDownIcon from "../../assets/header-foot-icons/dropDownIcon.svg";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="pr-5">
          <Link to="/"> Home </Link>
        </li>
        <li className="flex pr-5">
          <Link to="/productsList"> Shop </Link>
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
