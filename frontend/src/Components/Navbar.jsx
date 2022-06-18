import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <NavLink to="/" className="links">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className="links">
            <li>A propos de moi</li>
          </NavLink>
          <a
            target="_blank"
            href="https://github.com/kpeset/test-technique-strateg"
            className="links"
          >
            <li>Github</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
