import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ItemProvider } from "./contexts/itemsContext";

const stripePromise = loadStripe(
  "pk_test_51Pk7m8P9KYnbHtuSYkCfqkXMjAVjHaZJcTa9ItfjRtdxPrpsPEIlM0Nan2FkIks5VPTOPSu6HPx6Z2RvMdeHkHB400nw9mXkxD"
);

export function App() {
  return (
    <ItemProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </ItemProvider>
  );
}
