import React from 'react';
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";
import { ThemeProvider } from "@/components/theme-provider";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="taskflow-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
