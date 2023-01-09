import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderButton from "./components/HeaderButton";
import GlobalStyle from "./GlobalStyle";

import CONFIG from "./libs/config/config";
import useStore from "./libs/store/useStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderButton name="안녕" />,
  },
]);

function App() {
  const getData = useStore((state) => state.getData);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
