import React from "react";
import ReactDOM from "react-dom/client";
import CarClassComponent from "./components/CarClassComponent.jsx";
import CarFunctionalComponent from "./components/CarFunctionalComponent.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CarClassComponent />
    <CarFunctionalComponent />
  </>
);
