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

//nesto
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
