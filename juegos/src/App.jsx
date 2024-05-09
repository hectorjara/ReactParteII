import Home from "./Pages/Home/Home";
import Detalles from "./Pages/Detalles/Detalles";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { ROUTES } from "./Const/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.detalles,
    element: <Detalles />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;