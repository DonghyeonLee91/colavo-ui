import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemSelectionBody from "./components/ItemSelectionBody";
import GlobalStyle from "./GlobalStyle";

import CONFIG from "./libs/config/config";
import useStore from "./libs/store/useStore";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemSelectionBody />,
    errorElement: <p>Not Found!</p>,
  },
]);

function App() {
  const getData = useStore((state) => state.getData);
  useEffect(() => {
    getData(CONFIG.DATA_API);
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
