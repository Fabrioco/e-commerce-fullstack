import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { useItemContext } from "../../../hooks/useItemContext";
import styles from "../styles.module.css";
import { cardStyle } from "./stylesFormCheckout";

export const FormCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { value, setItems, showNotification } = useItemContext();

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
          "https://backend-commerce-9f7a1c0386d2.herokuapp.com/create-payment-intent",
          {
            amount: value,
          }
        );

        const result = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Usuário",
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
            showNotification(
              "código do pedido copiado para area de transferência",
              "success"
            );
            setItems([]);
            setTimeout(() => {
              window.location.href = "/";
            }, 5000);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setPaymentError(error.message);
      showNotification("algo deu errado, verifique o erro", "error");
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
