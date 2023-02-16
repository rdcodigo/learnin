import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './components/pages/home'
import { Signup } from './components/pages/signup'
import { Login } from './components/pages/login'
import { Profile } from './components/pages/profile'
import { Dashboard } from './components/pages/dashboard'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default function Router() {

  return (
    <RouterProvider router={routers} />
  )
}