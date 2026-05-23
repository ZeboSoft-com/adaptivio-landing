import Laptop_Mockup from "../assets/Laptop_Mockup.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 md:px-10 py-16 bg-[#F3FBFA] w-full overflow-hidden">
      <h1 className="text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
        Join Us In <span className="text-blue-500">Shaping An Innovative</span>{" "}
        Solution To Retain And Reward Your Talents.
      </h1>

      <p className="text-gray-500 mt-4">
        Participate in building solutions that help you retain, engage, and
        reward your teams better.
      </p>

      <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
        Join now
      </button>

      <div className="mt-12 w-full max-w-3xl">
        <img src={Laptop_Mockup} className="w-full rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
