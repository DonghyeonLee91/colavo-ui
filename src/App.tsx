import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import CONFIG from "./libs/config/config";
import useStore from "./libs/store/useStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>h1</p>,
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
