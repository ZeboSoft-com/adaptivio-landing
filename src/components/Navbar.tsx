import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-sm w-full">
      <img src={Logo} className="h-8 w-auto" />

      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li className="text-blue-600 font-semibold cursor-pointer">Home</li>
        <li className="cursor-pointer hover:text-blue-600">About us</li>
        <li className="cursor-pointer hover:text-blue-600">Our Team</li>
        <li className="cursor-pointer hover:text-blue-600">The Survey</li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <span className="text-gray-600 cursor-pointer">English</span>
      </div>
    </nav>
  );
};

export default Navbar;
