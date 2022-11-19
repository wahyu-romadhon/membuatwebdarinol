import About from "./page/about";
import Homepage from "./page/home";
import Contact from "./page/contact";

export const route = [
  {
    value: 0,
    label: "Home",
    path: "/home",
    element: <Homepage />,
  },
  {
    value: 1,
    label: "About",
    path: "/about",
    element: <About />,
  },
  {
    value: 2,
    label: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];
