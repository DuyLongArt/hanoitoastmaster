import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";

// `createRoot` mounts React into the <div id="root"> from index.html.
// `BrowserRouter` enables URL-based routing (e.g. /shdk, /member).
// `StrictMode` runs extra checks in development to catch common mistakes.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
