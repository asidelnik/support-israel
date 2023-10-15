// Packages
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layouts
import RootLayout from "./components/layouts/RootLayout";

// Pages
import EditPage from "./pages/EditPage";
import RouteNotFound from "./pages/NotFoundPage";
import ThemePage from "./pages/ThemePage";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route
        index
        element={<ThemePage />}
      ></Route>
      <Route
        path="theme"
        element={<ThemePage />}
      ></Route>
      <Route
        path="edit"
        element={<EditPage />}
      ></Route>

      <Route
        path="*"
        element={<RouteNotFound />}
      />
    </Route>
  )
);
