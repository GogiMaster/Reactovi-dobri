import Header from "./components/header";
//pages
import Brewary from "./pages/brewary";
import EuropeCountries from "./pages/europe-countries";
import Europe from "./pages/europe";
import Exe from "./pages/exe";
import Fave from "./pages/fave";
import Funkcije from "./pages/funkcije";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import Petlje from "./pages/petlj";
import Pokemon from "./pages/pokemons";
import Teorem from "./pages/teorem";
import Varijable from "./pages/varijable";
import Vjezba2804 from "./pages/vjezba2804";
import Vjezba0305 from "./pages/vjezba0305";

//nesto
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/chat";
import Vjezba1505 from "./pages/debug";
import ToDoList from "./pages/toDoList";
import JavaIspit from "./pages/Java.ispit";
import Timer from "./pages/timer";
import Band from "./data/band";
import BandList from "./pages/band-list";
import Bootstrap from "./pages/bootstrap";
import Game from "./pages/game";
import Instagram from "./components/INSTAGRAM/instagram";
import Kalkulator from "./components/KALKILATOR/kalkulator";

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
    {
      path: "/pokemon",
      element: <Pokemon />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/europe/:countryId",
      element: <EuropeCountries />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/debug",
      element: <Vjezba1505 />,
    },
    {
      path: "/toDoList",
      element: <ToDoList />,
    },
    {
      path: "/javaIspit",
      element: <JavaIspit />,
    },
    {
      path: "/timer",
      element: <Timer />,
    },
    {
      path: "/band",
      element: <BandList />,
    },
    {
      path: "/bootstrap",
      element: <Game />,
    },
    {
      path: "/instagram",
      element: <Instagram/>,
    },
    {
      path: "/kalkulator",
      element: <Kalkulator/>,
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
