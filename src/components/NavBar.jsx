import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="">
      <div>
        <nav>
          <Link to="/">
            Big-Bob
          </Link>
          <Link to="/post">
            Blog
          </Link>
          <Link to="/project">
            Projects
          </Link>
          <Link to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar