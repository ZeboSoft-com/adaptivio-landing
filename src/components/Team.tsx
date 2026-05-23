import B_Capita from "../assets/B_Capita.png";
import DMCaetano from "../assets/D_M_Caetano.png";

const Team = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
        Our Team
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="flex-1">
          <img
            src={B_Capita}
            alt="Bibi Kapita"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Bibi Kapita</h3>
          <p className="text-gray-500 leading-relaxed">
            I'm Bibi Kapita. I work in Human Resources, and over the years, I've
            had the opportunity to support teams and leaders in organizations of
            all sizes. Talent retention, engagement, and recognition are the
            challenges that inspire me daily.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <img
            src={DMCaetano}
            alt="Daniela Moreira Caetano"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Daniela Moreira Caetano
          </h3>
          <p className="text-gray-500 leading-relaxed">
            I'm Daniela Caetano. Specializing in project structuring and process
            optimization, I've helped numerous organizations improve their
            internal processes. At Adaptivio, I'm dedicated to developing a
            solution that genuinely simplifies business operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
