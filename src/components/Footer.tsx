import LogoB from "../assets/Logo_Black.png";
import StartLab from "../assets/StartLab.png";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-600 mx-6 md:mx-16 rounded-2xl px-8 py-12 text-center mb-22">
        <h3 className="text-2xl font-bold text-white mb-2">
          Newsletter Subscription
        </h3>
        <p className="text-blue-100 mb-6">
          Receive exclusive results from our study and be among the first to
          discover and test our solution!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-md mx-auto md:bg-white rounded-full md:p-1">
          <input
            type="email"
            placeholder="Enter your Email"
            className="flex-1 w-full px-4 py-2 rounded-full outline-none text-gray-700 bg-white md:bg-transparent"
          />
          <button className="w-full md:w-auto px-6 py-2 mt-4 md:mt-0 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-black px-6 md:px-16 py-10">
        {/* Logo, Tagline & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <img src={LogoB} className="h-8 w-auto mb-2" />
            <p className="text-gray-400 text-sm max-w-xs">
              Shaping an innovative solution to retain and reward your talents.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">On Social Media</span>
            <div className="flex gap-4">
              <FaLinkedinIn className="text-white cursor-pointer bg-blue-600 hover:bg-blue-500 rounded-full p-2 text-3xl" />
              <FaFacebookF className="text-white cursor-pointer bg-blue-600 hover:bg-blue-500 rounded-full p-2 text-3xl" />
              <FaXTwitter className="text-white cursor-pointer bg-blue-600 hover:bg-blue-500 rounded-full p-2 text-3xl" />
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex justify-center items-center gap-2">
          <img src={StartLab} className="h-5 w-auto" />
          <span className="text-gray-400 text-sm">Incubated By StartLab</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
