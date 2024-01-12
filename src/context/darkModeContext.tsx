import React, { createContext, useReducer, ReactNode } from "react";
import DarkModeReducer from "./darkModeReducer";

interface DarkModeContextProps {
  children: ReactNode;
}

export interface DarkModeState {
  darkMode: boolean;
}

const INITIAL_STATE: DarkModeState = {
  darkMode: false,
};

export const DarkModeContext = createContext<{
  darkMode: boolean;
  dispatch: React.Dispatch<any>;
}>({ darkMode: INITIAL_STATE.darkMode, dispatch: () => null });

export const DarkModeContextProvider: React.FC<DarkModeContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
