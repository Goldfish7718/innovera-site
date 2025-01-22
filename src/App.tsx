import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./views/Landing";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
