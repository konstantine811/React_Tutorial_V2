import { useLocation, useNavigate } from "react-router-dom";

import { Select, Option } from "@material-tailwind/react";

const Nav = ({ links }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="shadow p-5">
      <div className="w-72">
        <Select
          value={pathname}
          onChange={(e) => {
            navigate(e);
          }}
          color="gray"
          label="Navigate to"
        >
          {Object.values(links).map((link) => {
            return (
              <Option
                disabled={link.path === pathname}
                key={link.title}
                value={link.path}
              >
                {link.title}
              </Option>
            );
          })}
        </Select>
      </div>
    </nav>
  );
};

export default Nav;
