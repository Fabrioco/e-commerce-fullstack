import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ItemProvider } from "./contexts/itemsContext";

const stripePromise = loadStripe(
  "pk_test_51LQ9l0Ku0QzRqUaO5rCwUyQwL6b5k0pJHk0wE5Sb0S6GmVr4dJg0q8x2qz4iR6H2Wd0s8k4b5l0v"
);

export function App() {
  return (
    <ItemProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />;
      </Elements>
    </ItemProvider>
  );
}
