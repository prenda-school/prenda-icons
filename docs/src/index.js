import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IconsComponent from "./IconsComponent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const headerStyle = {
  padding: "16px",
  fontSize: "2.5rem",
  margin: 0,
  textAlign: "center",
};

root.render(
  <React.StrictMode>
    <h1 style={headerStyle}>Prenda Icons</h1>
    <IconsComponent />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
