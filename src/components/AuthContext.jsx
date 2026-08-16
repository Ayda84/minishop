import { createContext, useEffect, useState } from "react";


export let AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [islogged, setislogged] = useState(false);

  useEffect(() => {

    const userStatus = localStorage.getItem("islogged"); 
    if (userStatus === "true") {
      setislogged(true);
    }
  }, []);

  const login = () => {
    setislogged(true);
    localStorage.setItem("islogged", "true");
  };


  return (
    <AuthContext.Provider value={{ islogged, login }}>
      {children}
    </AuthContext.Provider>
  );
}
