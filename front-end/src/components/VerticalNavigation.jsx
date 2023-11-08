import { Link } from "react-router-dom";
import prayIcon from "../assets/icons/pray-icon.svg";
import swiIcon from "../assets/icons/swim-icon.svg";
import cyclistIcon from "../assets/icons/cyclist-icon.svg";
import dumbbellIcon from "../assets/icons/dumbbell-icon.svg";

/**
 * @return { HTMLElement }
 */
const VerticalNavigation = () => {
  return (
    <nav className="verticalNav">
      <ul>
        <li>
          <Link>
            <img src={prayIcon} alt="icone prière" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={swiIcon} alt="icone natation" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={cyclistIcon} alt="icone cycliste" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={dumbbellIcon} alt="icone haltère" />
          </Link>
        </li>
      </ul>
      <div className="copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </nav>
  );
};

export default VerticalNavigation;
