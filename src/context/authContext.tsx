import {
  ReactNode,
  createContext,
  useReducer,
  Dispatch,
  useEffect,
} from "react";
import AuthReducer, { AuthAction } from "./authReducer";

interface AuthState {
  currentUser: null;
}

interface AuthContextProps {
  currentUser: AuthState["currentUser"];
  dispatch: Dispatch<AuthAction>;
}

const storedUser = localStorage.getItem("user");
const INITIAL_STATE: AuthState = {
  currentUser: storedUser ? JSON.parse(storedUser) : null,
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: INITIAL_STATE.currentUser,
  dispatch: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
