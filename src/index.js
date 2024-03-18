import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import GithubProfileFinder from "./App";
import User from "./user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
