import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/" 
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Big-Bob
          </NavLink>
          <NavLink 
            to="/post"
            className="inflex-flex items-center py-3 px3 my-6 mr-4 rounded text-red-200 hover:text-green-800"
          >
            Blog
          </NavLink>
          <NavLink to="/project" className="inflex-flex items-center py-3 px3 my-6 mr-4 rounded text-red-200 hover:text-green-800">
            Projects
          </NavLink>
          <NavLink to="/about" className="inline-flex items-center py-3 px3 my-6 mr-4 rounded text-red-200 hover:text-green-800">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar