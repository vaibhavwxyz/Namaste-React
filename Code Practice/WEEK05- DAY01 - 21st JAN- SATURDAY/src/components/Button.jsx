import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Button() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <button
      className="relative text-[#ee8512] border-[#ee8512] border-[1.2px] rounded-full px-5 py-2 flex items-center justify-center font-medium sm:hover:bg-[#ee8512] sm:hover:text-white transition-all duration-200 ease-in-out w-28"
      onClick={handleButtonClick}
    >
      <FontAwesomeIcon icon={faUser} className="mr-2" />
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default Button;
