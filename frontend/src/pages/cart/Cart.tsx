import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./styles.module.css";
import React from "react";
import { FormCheckout } from "./components/FormCheckout";

export function Cart() {
  const [step, setStep] = React.useState(0);

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
            <div className={styles.product}>
              <img
                src="https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className={styles.productImg}
              />
              <div className={styles.productInfo}>
                <div className={styles.productNamePrice}>
                  <p>Nome do Produto</p>
                  <span>Valor</span>
                </div>
                <div className={styles.productCart}>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <img
                src="https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className={styles.productImg}
              />
              <div className={styles.productInfo}>
                <div className={styles.productNamePrice}>
                  <p>Nome do Produto</p>
                  <span>Valor</span>
                </div>
                <div className={styles.productCart}>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <div className={styles.summaryInfo}>
              <h3>Pedidos</h3>
              <p>
                SubTotal <span>R$ 1999,99</span>
              </p>
              <p>
                Frete <span>R$ 99,99</span>
              </p>
              <p>
                Total <span>R$ 2098,98</span>
              </p>
              <button className={styles.button} onClick={() => setStep(1)}>
                Finalizar Compra
              </button>
            </div>
            {step === 1 && (
              // <div className={styles.summaryCard}>
              //   <div className={styles.cardInfo}>
              //     <span>CARTÃO DE CREDITO</span>
              //     <input type="text" placeholder="Número do Cartão" max={16} />
              //     <div className={styles.chip}></div>
              //     <input type="text" placeholder="Nome do Titular" />
              //     <input type="text" placeholder="Validade" max={4} />
              //     <input type="text" placeholder="CVV" max={3} />
              //   </div>
              //   <div className={styles.buttonContainer}>
              //     <button
              //       onClick={() => setStep(0)}
              //       className={styles.buttonCancel}
              //     >
              //       Cancelar
              //     </button>
              //     <button className={styles.buttonConfirm} >Confirmar</button>
              //   </div>
              // </div>
              <FormCheckout />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
