import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/app/hooks";
import { signOut, selectAuth } from "store/features/auth/slice";

const SignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector(selectAuth).status;

  useEffect(() => {
    const logout = async () => {
      await dispatch(signOut());

      navigate("/");
    };

    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default SignOut;
