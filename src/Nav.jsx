import { useLocation, Link } from "react-router-dom";

import { Button } from "@material-tailwind/react";

const Nav = ({ links }) => {
  const { pathname } = useLocation();

  function isCurrentPath(path) {
    return path === pathname;
  }

  return (
    <nav className="shadow p-5 flex gap-5">
      {Object.values(links).map((link) => {
        return (
          <Link key={link.title} to={link.path}>
            <Button
              color={isCurrentPath(link.path) ? "blue-gray" : "indigo"}
              disabled={isCurrentPath(link.path)}
            >
              {link.title}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
