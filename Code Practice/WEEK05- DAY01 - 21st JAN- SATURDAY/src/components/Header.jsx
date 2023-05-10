import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="flex justify-between py-5">
      <div className="uppercase font-extrabold text-[#ee8512] 2xl:text-3xl tracking-wide">
        <FontAwesomeIcon icon={faUtensils} className="mr-2" />
        Home.chef
      </div>
      <ul className="flex items-center gap-5 font-semibold ">
        <li className="hover:text-[#ee8512] cursor-pointer">Home</li>
        <li className="hover:text-[#ee8512] cursor-pointer">Menu</li>
        <li className="hover:text-[#ee8512] cursor-pointer">About us</li>
        <li className="hover:text-[#ee8512] cursor-pointer">Contact us</li>
      </ul>
      <Button />
    </nav>
  );
};

export default Header;
