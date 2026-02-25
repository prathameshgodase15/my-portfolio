const Projects = () => {
  return (
    <section className="py-20 px-10 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">
            Inventory Management System
          </h3>
          <p className="text-gray-400">
            Built using React, Node.js and MongoDB.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">
            E-Commerce App
          </h3>
          <p className="text-gray-400">
            Payment integration and cart system.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;