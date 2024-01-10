// react router dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layouts RootLayout
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";

// Components
import { ProtectedRoutes } from "./components/ProtectedRoutes";
// Hooks
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Recipe from "./pages/Recipe";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);

  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
