import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("./Components/Home.jsx"));
const AboutPage = lazy(() => import("./Components/About.jsx"));
const CartPage = lazy(() => import("./Components/Cart/Cart.jsx"));
const Loader = lazy(() => import("./Components/Loader.jsx"));

//import Home from "./Components/Home.jsx";
//import About from "./Components/About.jsx";
//import Cart from "./Components/Cart/Cart.jsx";
//import Loader from "./Components/Loader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    //element: <Home />,
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    //element: <About />,
    element: (
      <Suspense fallback={<Loader />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    //element: <Cart />,
    element: (
      <Suspense fallback={<Loader />}>
        <CartPage />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
