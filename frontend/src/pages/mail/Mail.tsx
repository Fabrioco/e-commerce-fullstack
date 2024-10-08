import {
  FaShoppingBag,
  FaHeart,
  FaGooglePlay,
  FaApple,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaCartPlus,
} from "react-icons/fa";
import mulher from "../../assets/images/mulher.png";
import sapato from "../../assets/images/sapato.png";
import bolsa from "../../assets/images/bolsa.png";
import vestidos from "../../assets/images/vestido.png";
import tenis from "../../assets/images/tenis.png";

import profissional1 from "../../assets/images/profissional1.jpg";
import profissional2 from "../../assets/images/profissional2.jpg";
import profissional3 from "../../assets/images/profissional3.jpg";
import profissional4 from "../../assets/images/profissional4.jpg";
import profissional5 from "../../assets/images/profissional5.jpg";
import bolsa2 from "../../assets/images/bolsa2.png";
import vestido2 from "../../assets/images/vestido2.jpg";
import vestido3 from "../../assets/images/vestido3.png";

import styles from "./styles.module.css";

export function Mail() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Style Haven</h3>
        <nav>
          <a href="#" className={styles.link}>
            Inicio
          </a>
          <a href="#" className={styles.link}>
            Produtos
          </a>
          <a href="#" className={styles.link}>
            Avaliações
          </a>
          <a href="#" className={styles.link}>
            Contato
          </a>
        </nav>
        <a href="/carrinho">
          <i>
            <FaShoppingBag size={35} color="#fff" />
          </i>
        </a>
      </header>

      <div className={styles.main}>
        <div className={styles.content}>
          <h2>Descubra Seu Estilo Perfeito</h2>
          <h1>Compre A Ultima Novidade Agora</h1>
          <div className={styles.buttons}>
            <button className={styles.target}>Descobrir Tendencias</button>
            <button className={styles.offer}>
              Inscreva-se E Ganhe 25% Off
            </button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={mulher} alt="Ícone da moda" />
        </div>
      </div>

      <div className={styles.category}>
        <span className={styles.title}>CATEGORIA</span>
        <div className={styles.options}>
          {[
            { img: sapato, label: "Sapatos" },
            { img: bolsa, label: "Bolsas" },
            { img: vestidos, label: "Vestidos" },
            { img: tenis, label: "Tênis" },
          ].map((item, index) => (
            <div className={styles.option} key={index}>
              <img src={item.img} alt={item.label} />
              <button>{item.label}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.products}>
        <span className={styles.title}>NOSSAS MELHORES COLEÇÕES</span>
        <nav className={styles.navProducts}>
          <button className={styles.active}>Todos</button>
          <button>Popular</button>
          <button>Novos</button>
          <button>Promoções</button>
        </nav>
        <div className={styles.productsContainer}>
          {[
            {
              img: sapato,
              title: "SAPATO PRETO ESTILO RASTEIRA",
              price: "R$100,00",
            },
            {
              img: vestidos,
              title: "VESTIDO ESTILO MODERNO",
              price: "R$150,00",
            },
            { img: tenis, title: "TÊNIS ESTILO CASUAL", price: "R$200,00" },
            { img: vestido2, title: "VESTIDO DE FESTA", price: "R$250,00" },
            { img: bolsa2, title: "BOLSA MODERNA", price: "R$300,00" },
            { img: bolsa, title: "BOLSA CLÁSSICA", price: "R$180,00" },
          ].map((product, index) => (
            <div className={styles.product} key={index}>
              <i className={styles.productLike}>
                <FaHeart size={30} color="red" />
              </i>
              <img
                src={product.img}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <p className={styles.productTitle}>{product.title}</p>
                <p className={styles.productPrice}>
                  <strong>{product.price}</strong>
                  <button className={styles.productCart}>
                    ADICIONAR <FaCartPlus size={20} color="#fff" />
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.team}>
        <span className={styles.title}>Nossos Colaboradores</span>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          necessitatibus nobis, laudantium!
        </p>
        <div className={styles.teamImages}>
          {[
            profissional1,
            profissional2,
            profissional3,
            profissional4,
            profissional5,
          ].map((img, index) => (
            <div className={styles.teamImage} key={index}>
              <img src={img} alt="Colaborador" />
              <div className={styles.teamInfo}>
                <p className={styles.name}>Nome do Colaborador</p>
                <p className={styles.role}>Cargo</p>
                <p className={styles.description}>Descrição</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.newsletter}>
        <div className={styles.newsletterImage}>
          <img src={vestido3} alt="Outro Vestido" />
        </div>
        <div className={styles.newsletterInfo}>
          <span className={styles.title}>Nosso Jornal</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className={styles.newsletterInput}>
            <input type="text" placeholder="Seu melhor e-mail" />
            <button>Enviar</button>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.column}>
          <h4 className={styles.title}>Fab</h4>
          <p className={styles.description}>Fabrício Design</p>
          <p className={styles.description}>Novidades todos os dias.</p>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Sobre</span>
          <p className={styles.description}>Direitos Do Consumidor</p>
          <p className={styles.description}>Devoluções</p>
          <p className={styles.description}>Politica De Privacidade</p>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Serviços Cliente</span>
          <p className={styles.description}>Expedição De Informação</p>
          <p className={styles.description}>Retorno De Informação</p>
          <p className={styles.description}>Pedidos De Troca</p>
          <p className={styles.description}>FAQs</p>
          <p className={styles.description}>Avaliações</p>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Suporte Ao Cliente</span>
          <p className={styles.description}>Aberto Todos Os Dias:</p>
          <span className={styles.description}>08:00 - 20:00</span>
          <p className={styles.description}>Ordem De Reclamação</p>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Baixe Nosso App</span>
          <button>
            <i>
              <FaGooglePlay />
            </i>
            Play Store
          </button>
          <button>
            <i>
              <FaApple />
            </i>
            Apple Store
          </button>
        </div>
        <div className={styles.baseboard}>
          <p className={styles.copyright}>
            @2024 Shop mart S.h Company Limited. All Rights Reserved
          </p>
          <nav className={styles.social}>
            <a href="#">
              <i>
                <FaTwitter size={50} color="#fff" />
              </i>
            </a>
            <a href="#">
              <i>
                <FaFacebookF size={50} color="#fff" />
              </i>
            </a>
            <a href="#">
              <i>
                <FaInstagram size={50} color="#fff" />
              </i>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
