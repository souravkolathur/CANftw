import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Learning from "./pages/Learning/Learning";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/game",
          element: <Game />,
        },
        {
          path: "/learning",
          element: <Learning />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
<<<<<<< Updated upstream
          <Route path="/roadmap" element={<Roadmap />} />
=======
>>>>>>> Stashed changes
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router> */}
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
