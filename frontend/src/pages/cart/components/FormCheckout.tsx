import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { useItemContext } from "../../../hooks/useItemContext";
import styles from "../styles.module.css";

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
  hidePostalCode: true,
};

export const FormCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { value, name } = useItemContext();

  const [paymentError, setPaymentError] = React.useState<string | undefined>(
    ""
  );
  const [paymentSuccess, setPaymentSuccess] = React.useState<
    string | undefined
  >("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError("O campo não foi carregado corretamente");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "http://localhost:4000/create-payment-intent",
          {
            amount: value,
          }
        );

        const result = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: name,
            },
          },
        });

        if (result.error) {
          setPaymentError(result.error.message);
        } else {
          if (
            result.paymentIntent &&
            result.paymentIntent.status === "succeeded"
          ) {
            setPaymentSuccess(
              `Pagamento concluído. Salve o Código do seu pedido. ${id}`
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setPaymentError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardStyle} />
      <button
        type="submit"
        className={styles.buttonConfirm}
        style={{ marginTop: "10px" }}
      >
        Pagar
      </button>
      {paymentError && <p>{paymentError}</p>}
      {paymentSuccess && <p>{paymentSuccess}</p>}
    </form>
  );
};
