import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Projects from "../Components/Projects/Projects";
import Experience from "../Components/Experience/Experience";
import Contact from "../Components/Contact/Contact";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: "/",
        element: <Home></Home>
      }],
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: "/projects",
        element: <Projects></Projects>
      }],
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: "/experience",
        element: <Experience></Experience>
      }],
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: "/contact",
        element: <Contact></Contact>
      }],
    },
  ]);

  export default router;