import React from "react";
import { Link } from "react-router-dom";

import "./Tabs.css";
import { selectLogin } from "store/features/auth/slice";
import { useAppSelector } from "store/app/hooks";

const Tabs = () => {
  const isLoggedIn = useAppSelector(selectLogin).isLoggedIn;

  return (
    <div className="tabs">
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>

      {!isLoggedIn && <Link to="/login">Login</Link>}

      {isLoggedIn && <Link to="/logout">Logout</Link>}
    </div>
  );
};

export default Tabs;
