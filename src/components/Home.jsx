import { Link, useLocation } from "react-router-dom";
import { NAV_MENU_CONFIG } from "../config/nav-menu.config";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex gap-5">
      {Object.values(NAV_MENU_CONFIG).map((link) => {
        return (
          <Link
            className={`p-10 rounded-lg shadow-lg ${
              link.path === pathname ? "bg-blue-gray-300 text-gray-300" : ""
            }`}
            key={link.title}
            to={link.path}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
