import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./styles.module.css";
import React from "react";
import { FormCheckout } from "./components/FormCheckout";
import { useItemContext } from "../../hooks/useItemContext";

export function Cart() {
  const { items, setValue, value } = useItemContext();
  const [step, setStep] = React.useState(0);
  const [shipping] = React.useState(10);

  React.useEffect(() => {
    const calculateValue = () => {
      const values = items.map((item) => item.price);
      const sumaValue = values.reduce(
        (accumulated, ActualValue) => accumulated + ActualValue,
        0
      );
      setValue(sumaValue);
    };
    calculateValue();
  }, [items, setValue]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Style Haven</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.baseboard}>
          <h2>Carro de Compras</h2>
          <a href="/">
            Voltar
            <i>
              <IoIosArrowRoundBack size={35} />
            </i>
          </a>
        </div>

        <div className={styles.products}>
          <div className={styles.productsContainer}>
            {items.map((item, index) => (
              <div key={index} className={styles.product}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.productImg}
                />
                <div className={styles.productInfo}>
                  <div className={styles.productNamePrice}>
                    <p>{item.name}</p>
                    <span>R$ {item.price},00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryInfo}>
              <h3>Pedidos</h3>
              <p>
                SubTotal <span>R$ {value}</span>
              </p>
              <p>
                Frete <span>R$ {shipping}</span>
              </p>
              <p>
                Total <span>R$ {value + shipping}</span>
              </p>
              <button className={styles.button} onClick={() => setStep(1)}>
                Finalizar Compra
              </button>
            </div>

            {step === 1 && <FormCheckout />}
          </div>
        </div>
      </div>
    </div>
  );
}
