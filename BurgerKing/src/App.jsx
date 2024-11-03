import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Components/home/Home";
import { Order } from "./Components/Order/Order";
import { Menu } from "./Components/Menu/menu";
import { Offers } from "./Components/Offers/Offers";
import { Restuarant } from "./Components/Restuarant/Restuarant";
import { Career } from "./Components/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/restaurants",
    element: <Restuarant />,
  },
  {
    path: "/careers",
    element: <Career />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
