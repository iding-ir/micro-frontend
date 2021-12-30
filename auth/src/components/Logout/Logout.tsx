import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/app/hooks";
import { signOut, selectLogin } from "store/features/auth/slice";

const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(signOut());

    navigate("/");
  };

  return { logout };
};

export default useLogout;
