import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { signIn, selectLogin } from "store/features/auth/slice";
import { useAppDispatch, useAppSelector } from "store/app/hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useAppSelector(selectLogin).user;
  const isLoggedIn = useAppSelector(selectLogin).isLoggedIn;
  const status = useAppSelector(selectLogin).status;

  const handleLogin = async () => {
    await dispatch(signIn({ email, password }));

    navigate("/");
  };

  return isLoggedIn ? (
    <div>{`Welcome ${user.username}`}</div>
  ) : (
    <form>
      <div className="group">
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <div className="group">
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <div className="group">
        <button
          type="button"
          onClick={handleLogin}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Please wait..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Login;
