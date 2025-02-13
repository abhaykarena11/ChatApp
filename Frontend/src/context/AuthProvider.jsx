import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("token") || localStorage.getItem("ChatApp");

  // parse the user data and storing in state.
  const [authUser, setAuthUser] = useState(
    initialUserState ? jwtDecode(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);