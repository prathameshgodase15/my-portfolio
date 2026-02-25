import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hover:text-blue-400 transition duration-300">
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800">
      <h1 className="text- font-bold text-blue-400">
        Welcome to My World
      </h1>

      <ul className="flex gap-8 text-gray-300">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/projects" className="hover:text-white">Projects</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </ul>
    </nav>
    </nav>
  );
};

export default Navbar;