import React, { useState } from "react";

import { signIn, selectAuth } from "store/features/auth/slice";
import { useAppDispatch, useAppSelector } from "store/app/hooks";

interface Props {}

const Auth = (props: Props) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useAppSelector(selectAuth).user;
  const isLoggedIn = useAppSelector(selectAuth).isLoggedIn;

  const handleLogin = async () => {
    await dispatch(signIn({ email, password }));
  };

  return isLoggedIn ? (
    <div>{`Welcome ${user.username}`}</div>
  ) : (
    <form>
      <input
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default Auth;