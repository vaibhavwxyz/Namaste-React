const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <img
        src="https://user-images.githubusercontent.com/73052214/234671439-155f12ea-4095-4264-a83c-5bed32e28ab9.svg"
        alt="logo"
      />
      <ul className="hidden sm:flex gap-5">
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          Home
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          Menu
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          About us
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          Contact us
        </li>
      </ul>
      <button className="bg-[#F4694C] px-5 py-2 rounded-full text-white font-semibold text-center md:hover:bg-[#e14221]">
        Login
      </button>
    </nav>
  );
};

export default Nav;
