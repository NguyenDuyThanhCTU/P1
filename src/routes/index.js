import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import EmptyLayout from "../Layout/EmptyLayout";
import Home from "../components/Home/Home";
import Product from "../components/Product/Product";
import Job from "../components/Job/Job";
import Introduction from "../components/Introduction/Introduction";
import Contact from "../components/Contact/Contact";

export const AllRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Product,
  },
  {
    path: "/jobs",
    component: Job,
  },
  {
    path: "/introduction",
    component: Introduction,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/login",
    component: Login,
    Layout: EmptyLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: EmptyLayout,
  },
];
