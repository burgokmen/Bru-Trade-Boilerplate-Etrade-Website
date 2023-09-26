import { Link } from "react-router-dom";

import dropDownIcon from "../../assets/header-foot-icons/dropDownIcon.svg";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="flex">
          <Link to="/productsList">Shop</Link>
          <img src={dropDownIcon} />
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Pages</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
