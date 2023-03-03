import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Nav from "./Nav";
import Home from "./components/Home";
import Memoization from "./components/Memoization";
import UseRef from "./components/UseRef";
// config
import { NAV_MENU_CONFIG } from "./config/nav-menu.config";

function App() {
  return (
    <div>
      <Nav links={NAV_MENU_CONFIG} />
      <div className="container mt-5">
        <Routes>
          <Route path={NAV_MENU_CONFIG.home.path} element={<Home />} />
          <Route
            path={NAV_MENU_CONFIG.memoization.path}
            element={<Memoization />}
          />
          <Route path={NAV_MENU_CONFIG.useRef.path} element={<UseRef />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
