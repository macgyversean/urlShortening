import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ navItems }) => {
  return (
    <nav>
      <div className="primaryNav">
        {navItems.map((link, index) => {
          return (
            <div key={`${link.title}-${index}`}>
              <Link to={link.url}>{link.title}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
Navigation.propTypes = {
  navItems: propTypes.array,
};
export default Navigation;
