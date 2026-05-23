const Survey = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 py-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Share Your Experience
      </h2>

      <p className="text-gray-500 max-w-lg mb-8">
        Take 5 minutes to share your vision! Your feedback is essential for
        developing a practical HR solution that maximizes your impact and
        simplifies your everyday work.
      </p>

      <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
        Start the Survey
      </button>
    </section>
  );
};

export default Survey;
