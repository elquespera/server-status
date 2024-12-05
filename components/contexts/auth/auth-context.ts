import { createContext, useContext } from "react";

type TAuthContext = {
  token: string | null;
  setToken: (value: string | null) => void;
  isAuth: boolean;
};

const defaultAuthContext: TAuthContext = {
  token: null,
  setToken: () => {},
  isAuth: false,
};

export const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);
