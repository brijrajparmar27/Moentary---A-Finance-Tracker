import { createContext, useEffect, useState } from "react";
import { fireauth } from "../firebase/config";
import useAuthContext from "../hooks/useAuthContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // const {user, setUser} = useAuthContext();
  // const {authIsReady, setAuthIsReady} = useAuthContext();
  
  const [user, setUser] = useState(null);
  const [authIsReady,setAuthIsReady] = useState(false);

  useEffect(()=>{
    const unsub = fireauth.onAuthStateChanged((user)=>{
      setUser(user);
      setAuthIsReady(true);
      unsub();
    })
  },[])

  return (
    <AuthContext.Provider value={{user, setUser, authIsReady,setAuthIsReady}}>
      {children}
    </AuthContext.Provider>
  );
};
