import Header from "./components/header";
//pages
import Exe from "./pages/exe";
import Fave from "./pages/fave";
import Funkcije from "./pages/funkcije";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import Petlje from "./pages/petlj";
import Teorem from "./pages/teorem";
import Varijable from "./pages/varijable";
import Vjezba2804 from "./pages/vjezba2804";

//nesto
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vjezba0305 from "./pages/vjezba0305";
import Brewary from "./pages/brewary";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/teorem",
      element: <Teorem />,
    },
    {
      path: "/fave",
      element: <Fave />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/funkcije",
      element: <Funkcije />,
    },
    {
      path: "/2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/brewary",
      element: <Brewary />,
    },
  ]);

  return (
    <>
      <div className="App">
        <Header />

        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
