import React from "react";

import { selectAuth } from "store/features/auth/slice";
import { useAppSelector } from "store/app/hooks";

const Aside = () => {
  const user = useAppSelector(selectAuth).user;
  const isLoggedIn = useAppSelector(selectAuth).isLoggedIn;

  return (
    <div className="welcome">
      {isLoggedIn ? `Welcome ${user.username}` : "Please sign in first"}
    </div>
  );
};

export default Aside;
