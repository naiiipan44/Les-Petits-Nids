// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import UserProvider from "./contexts/UserProvider";
import Favorites from "./pages/Favorites";

import NotFound from "./components/NotFound";
import ProtectedNurseryRoute from "./components/ProtectedNurseryRoute";
import ProtectedParentRoute from "./components/ProtectedParentRoute";
import LandingPage from "./pages/LandingPage";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage";
import MapPage from "./pages/MapPage";
import NurseryPage from "./pages/NurseryPage";
import NurseryProfilePage from "./pages/NurseryProfilePage";
import ParentProfilePage from "./pages/ParentProfilePage";
import SearchPage from "./pages/SearchPage";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },

      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "search/:id",
        element: <NurseryPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/nursery/${params.id}`,
          );
          const data = await response.json();

          if (data.error) {
            return redirect("/not-found");
          }
          return data;
        },
      },
      {
        path: "login",
        element: <LoginAndRegisterPage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "parent",
        element: (
          <ProtectedParentRoute>
            <ParentProfilePage />
          </ProtectedParentRoute>
        ),
      },
      {
        path: "nursery",
        element: (
          <ProtectedNurseryRoute>
            <NurseryProfilePage />
          </ProtectedNurseryRoute>
        ),
      },
      {
        path: "map",
        element: <MapPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
