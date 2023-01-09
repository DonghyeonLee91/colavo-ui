import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import CONFIG from "./libs/config/config";
import useStore from "./libs/store/useStore";
import DiscountSelectionPage from "./pages/DiscountSelectionPage";
import ItemSelectionPage from "./pages/ItemSelectionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemSelectionPage />,
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
