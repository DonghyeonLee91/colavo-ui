import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import CONFIG from "./libs/config/config";
import useStore from "./libs/store/useStore";
import DiscountSelectionPage from "./pages/DiscountSelectionPage";
import ItemSelectionPage from "./pages/ItemSelectionPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CartPage />,
    errorElement: <p>Not Found!</p>,
  },
  {
    path: "/items",
    element: <ItemSelectionPage />,
  },
  {
    path: "/discounts",
    element: <DiscountSelectionPage />,
  },
]);

function App() {
  const getData = useStore((state) => state.getData);
  const getExchangeRate = useStore((state) => state.getExchangeRate);
  useEffect(() => {
    getData(CONFIG.DATA_API);
    getExchangeRate(CONFIG.EXCHANGE_RATE_API);
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
