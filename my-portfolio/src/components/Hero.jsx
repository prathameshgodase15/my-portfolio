
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 text-center md:text-left">
      
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-400">Prathamesh</span> 👋
        </h2>

        <p className="text-gray-400 text-lg">
          Full Stack Developer | React | Node.js
        </p>

        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
          Download Resume
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://via.placeholder.com/300"
          alt="profile"
          className="rounded-full w-64 h-64 object-cover border-4 border-blue-400 shadow-lg"
        />
      </div>

    </section>
  );
};

export default Hero;