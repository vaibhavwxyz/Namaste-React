import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between py-5">
      <div className="uppercase font-extrabold text-[#ee8512] 2xl:text-3xl tracking-wide">
        <FontAwesomeIcon icon={faUtensils} className="mr-2" />
        Home.chef
      </div>
      <ul className="flex items-center gap-5 font-semibold ">
        <li className="hover:text-[#ee8512] cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#ee8512] cursor-pointer">Menu</li>
        <li className="hover:text-[#ee8512] cursor-pointer">
          <Link to={"/about"}>About us</Link>
        </li>
        <li className="hover:text-[#ee8512] cursor-pointer">
          <Link to={"/contact"}>Contact us</Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default Header;
