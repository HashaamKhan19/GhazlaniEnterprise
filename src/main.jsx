import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import AuthProvider from "./context/authContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontFamily: "Urbanist" }}
    >
      <AuthProvider>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        <App />
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
