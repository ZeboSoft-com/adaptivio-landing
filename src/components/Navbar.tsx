import { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <img src={Logo} className="h-8 w-auto" />

        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="text-blue-600 font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About us</li>
          <li className="cursor-pointer hover:text-blue-600">Our Team</li>
          <li className="cursor-pointer hover:text-blue-600">The Survey</li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-600 cursor-pointer">🌐 English</span>
        </div>

        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 text-gray-600 font-medium border-t border-gray-100">
          <li className="list-none text-blue-600 font-semibold cursor-pointer pt-4">
            Home
          </li>
          <li className="list-none cursor-pointer hover:text-blue-600">
            About us
          </li>
          <li className="list-none cursor-pointer hover:text-blue-600">
            Our Team
          </li>
          <li className="list-none cursor-pointer hover:text-blue-600">
            The Survey
          </li>
          <span className="text-gray-600 cursor-pointer">🌐 English ∨</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
