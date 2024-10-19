import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Car from "./Car.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Car />a
  </StrictMode>
);
