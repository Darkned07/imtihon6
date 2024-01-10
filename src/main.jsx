import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GlobalContext
import { GlobalContextProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <ToastContainer autoClose={2000} />
  </>
);
