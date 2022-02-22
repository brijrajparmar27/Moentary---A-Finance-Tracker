import { useEffect, useState } from "react";
import { fireauth } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import useSignup from "./useSignup";

const useLogout = () => {
  const { user, setUser } = useAuthContext(null);
  const [error, setError] = useState(null);
  const [cancelled, isCancelled] = useState(false);

  useEffect(() => {
    return () => {
      isCancelled(true);
    };
  }, []);
  const logout = async () => {
    try {
      await fireauth.signOut();
      !cancelled && setUser(null);
    } catch (e) {
      setError(e);
    }
  };

  return { logout, error };
};

export default useLogout;
