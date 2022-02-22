import { useEffect, useState } from "react";
import { fireauth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const { user, setUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelled, isCancelled] = useState(false);

  useEffect(() => {
    return () => {
      isCancelled(true);
    };
  }, []);
  const login = async (email, pass) => {
    try {
      !cancelled && setLoading(true);
      const res = await fireauth.signInWithEmailAndPassword(email, pass);
      // console.log(res.user.uid);
      !cancelled && setUser(res.user);
      !cancelled && setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  return { login, error, loading };
};

export default useLogin;
