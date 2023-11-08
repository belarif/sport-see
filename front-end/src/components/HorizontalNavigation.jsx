import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

/**
 *
 * @return { HTMLElement }
 */
const HorizontalNavigation = () => {
  return (
    <nav className="horizontalNav">
      <img src={logo} alt="logo sport see" />
      <ul>
        <li>
          <Link>Accueil</Link>
        </li>
        <li>
          <Link>Profil</Link>
        </li>
        <li>
          <Link>Réglage</Link>
        </li>
        <li>
          <Link>Communauté</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNavigation;
