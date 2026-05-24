import Ipad_Mockup from "../assets/Ipad_Mockup.png";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-16 py-20 bg-white">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          About Adaptivio
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          At Adaptivio, we believe that retaining and rewarding talents
          efficiently should never be a hassle nor a luxury reserved for a few.
          Our ambition is clear: we aim to create an innovative, accessible
          solution that makes bonus systems via warrants simple, accessible, and
          perfectly tailored to operational needs.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
          Join now
        </button>
      </div>

      <div className="flex-1 bg-blue-600 rounded-2xl flex items-center justify-center p-6">
        <img src={Ipad_Mockup} className="w-full rounded-xl" />
      </div>
    </section>
  );
};

export default About;
