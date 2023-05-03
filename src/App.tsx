import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "signin",
    element: <SigninPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
