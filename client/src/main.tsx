// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import UserProvider from "./contexts/UserProvider";
import Favorites from "./pages/Favorites";
import LandingPage from "./pages/LandingPage";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage";
import NurseryPage from "./pages/NurseryPage";
import ParentsBookings from "./pages/ParentsProfils";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

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

          if (!response.ok) {
            throw new Error(
              `Erreur lors de la récupération de la crèche avec l'ID ${params.id} : ${response.statusText}`,
            );
          }

          return response.json();
        },
      },
      {
        path: "loginandregister",
        element: <LoginAndRegisterPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "parentsbookings",
        element: <ParentsBookings />,
      },
    ],
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
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
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
