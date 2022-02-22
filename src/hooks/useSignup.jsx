import { useEffect, useState } from "react";
import { fireauth } from "../firebase/config";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelled, isCancelled] = useState(false);
  useEffect(() => {
    return () => {
      isCancelled(true);
    };
  }, []);
  const signup = async (uname, pass, displayName) => {
    try {
      setLoading(true);
      let res = await fireauth.createUserWithEmailAndPassword(uname, pass);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      await res.user.updateProfile({ displayName });
      // console.log(res);
      !cancelled && setLoading(false);
      !cancelled && setError(null);
      return res.user;
    } catch (e) {
      console.log(e);
      !cancelled && setError(e);
      !cancelled && setLoading(false);
    }
  };

  return { loading, error, signup };
};

export default useSignup;
