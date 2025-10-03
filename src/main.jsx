import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: async () => {
          // Example: fetch users from API
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          if (!res.ok) throw new Error("Failed to load users");
          return res.json();
        },
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
  },

  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
