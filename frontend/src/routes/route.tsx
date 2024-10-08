import { createBrowserRouter } from "react-router-dom";
import { Mail } from "../pages/mail/Mail";
import { Cart } from "../pages/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mail />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
  },
]);
