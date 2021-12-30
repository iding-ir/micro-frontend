import React from "react";
import { Link } from "react-router-dom";

import "./Welcome.css";
import { selectLogin } from "store/features/auth/slice";
import { useAppSelector } from "store/app/hooks";

const Aside = () => {
  const user = useAppSelector(selectLogin).user;
  const isLoggedIn = useAppSelector(selectLogin).isLoggedIn;

  return (
    <div className="welcome">
      {isLoggedIn ? (
        <div>{`Welcome ${user.username}`}</div>
      ) : (
        <div>
          Please sign in first: <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Aside;
