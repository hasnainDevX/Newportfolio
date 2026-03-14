import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from "@vercel/analytics";
injectSpeedInsights();
inject();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
