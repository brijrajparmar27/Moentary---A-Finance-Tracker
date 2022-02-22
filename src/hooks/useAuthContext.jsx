import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
  const {user, setUser, authIsReady, setAuthIsReady} = useContext(AuthContext);
  // console.log(user);

//   if (!user) {
//     throw Error("AuthContext Out of Bounds");
//   }

  return {user, setUser, authIsReady, setAuthIsReady};
};

export default useAuthContext;