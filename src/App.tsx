import Exe from "./pages/exe";
import Header from "./components/header";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
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
