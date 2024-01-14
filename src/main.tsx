import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeContextProvider } from "./context/darkModeContext.tsx";
import { AuthContextProvider } from "./context/authContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
