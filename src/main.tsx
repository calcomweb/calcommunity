import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Clarity from "@microsoft/clarity";

const clarityId = import.meta.env.VITE_CLARITY_ID;
if (clarityId) {
  Clarity.init(clarityId);
}

createRoot(document.getElementById("root")!).render(<App />);
