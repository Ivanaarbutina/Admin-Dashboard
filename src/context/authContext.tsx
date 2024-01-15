import { ReactNode, createContext, useReducer, Dispatch } from "react";
import AuthReducer, { AuthAction } from "./authReducer"; // Import AuthAction from your authReducer

interface AuthState {
  currentUser: null; // Adjust the type based on your actual user type
}

// Combine AuthState and AuthDispatch into AuthContextProps
interface AuthContextProps {
  currentUser: AuthState["currentUser"];
  dispatch: Dispatch<AuthAction>; // Use Dispatch<AuthAction> instead of Dispatch<any>
}

const INITIAL_STATE: AuthState = {
  currentUser: null,
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: INITIAL_STATE.currentUser,
  dispatch: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
