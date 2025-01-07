import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import router from "./routes/Routes";
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="w-full md:max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
        <Toaster position='top-right' reverseOrder={false} />
      </div>
    </AuthProvider>
  </StrictMode>
);
