import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../components/Client/Home/Home";
import ClientLayout from "../Layout/ClientLayout.jsx/ClientLayout";
import Introduction from "../components/Client/Introduction/Introduction";
import Product from "../components/Client/Products/Product";
import Branches from "../components/Client/Branches/Branches";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: DefaultLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: DefaultLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
  {
    path: "/introduction",
    component: Introduction,
    Layout: ClientLayout,
  },
  {
    path: "/products",
    component: Product,
    Layout: ClientLayout,
  },
  {
    path: "/branches",
    component: Branches,
    Layout: ClientLayout,
  },
  // {
  //   path: "/news",
  //   component: Introduction,
  //   Layout: ClientLayout,
  // },
  // {
  //   path: "/test-drive",
  //   component: Introduction,
  //   Layout: ClientLayout,
  // },
  // {
  //   path: "/installment-price",
  //   component: Introduction,
  //   Layout: ClientLayout,
  // },
  // {
  //   path: "/price",
  //   component: Introduction,
  //   Layout: ClientLayout,
  // },
];
