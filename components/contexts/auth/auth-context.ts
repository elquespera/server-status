import { createContext, useContext } from "react";

type TAuthContext = {
  isAuth: boolean;
};

const defaultAuthContext: TAuthContext = {
  isAuth: false,
};

export const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);
