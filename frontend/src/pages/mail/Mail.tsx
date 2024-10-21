import React from "react";
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
import { FaFilterCircleXmark } from "react-icons/fa6";
import mulher from "../../assets/images/mulher.png";
import sapato from "../../assets/images/sapato.png";
import bolsa from "../../assets/images/bolsa.png";
import vestidos from "../../assets/images/vestido.png";
import tenis from "../../assets/images/tenis.png";

import vestido3 from "../../assets/images/vestido3.png";

import styles from "./styles.module.css";
import { products } from "../../data/products";
import { useItemContext } from "../../hooks/useItemContext";
import { Product } from "../../contexts/itemsContext";
import { professionals } from "../../data/professionals";

export function Mail() {
  const { setItems, qntItem, showNotification } = useItemContext();

  const [productsList, setProductsList] = React.useState(products);

  const showOnlyOneProduct = (product: string) => {
    switch (product) {
      case "Sapatos":
        setProductsList(
          products.filter((item) => item.categoria === "Sapatos")
        );
        break;

      case "Tenis":
        setProductsList(products.filter((item) => item.categoria === "Tenis"));
        break;

      case "Bolsas":
        setProductsList(products.filter((item) => item.categoria === "Bolsas"));
        break;

      case "Vestidos":
        setProductsList(
          products.filter((item) => item.categoria === "Vestidos")
        );
        break;

      default:
        break;
    }
  };

  const showSubcategory = (subcategory: string) => {
    switch (subcategory) {
      case "new":
        setProductsList(productsList.filter((item) => item.new === true));

        break;

      case "offer":
        setProductsList(productsList.filter((item) => item.offer === true));
        break;

      case "popular":
        setProductsList(productsList.filter((item) => item.popular === true));
        break;

      case "all":
        setProductsList(products);
        break;
      default:
        break;
    }
  };

  const addProductToCart = (
    uid: number,
    product: string,
    price: number,
    image: string
  ) => {
    const fullproduct: Product = {
      id: uid,
      name: product,
      price: price,
      image: image,
    };
    setItems((prevItems) => {
      const updatedItems = [...prevItems, fullproduct];
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
    showNotification('Item adicionado ao carrinho com sucesso','success')
  };



  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Style Haven</h3>
        <nav>
          <a href="#home" className={styles.link}>
            Inicio
          </a>
          <a href="#products" className={styles.link}>
            Produtos
          </a>
          <a href="#professional" className={styles.link}>
            Profissionais
          </a>
          <a href="#contacts" className={styles.link}>
            Contato
          </a>
        </nav>
        <a href="/carrinho" className={styles.link}>
          <i>
            <FaShoppingBag size={55} color="#fff" />
          </i>
          <span className={styles.qntItem}>{qntItem}</span>
        </a>
      </header>

      <div className={styles.main} id="home">
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
            { img: tenis, label: "Tenis" },
          ].map((item, index) => (
            <div className={styles.option} key={index}>
              <img src={item.img} alt={item.label} />
              <button onClick={() => showOnlyOneProduct(item.label)}>
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.products} id="products">
        <span className={styles.title}>NOSSAS MELHORES COLEÇÕES</span>
        <nav className={styles.navProducts}>
          <button onClick={() => showSubcategory("all")}>Todos</button>
          <button onClick={() => showSubcategory("new")}>Novos</button>
          <button onClick={() => showSubcategory("popular")}>Populares</button>
          <button onClick={() => showSubcategory("offer")}>Em Oferta</button>

          {productsList !== products && (
            <p
              className={styles.filter}
              onClick={() => setProductsList(products)}
            >
              Limpar Filtro
              <i>
                <FaFilterCircleXmark size={40} />
              </i>
            </p>
          )}
        </nav>
        <div className={styles.productsContainer}>
          {productsList.map((product, index) => (
            <div className={styles.product} key={index}>
              <i className={styles.productLike}>
                <FaHeart size={30} color="red" />
              </i>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              {product.new === true && (
                <span className={styles.newProduct}>NOVO</span>
              )}
              <div className={styles.productInfo}>
                <p className={styles.productTitle}>{product.name}</p>
                <p className={styles.productPrice}>
                  {product.offer === true ? (
                    <>
                      <del>R$ {product.price},00</del>{" "}
                      <strong>R$ {product.offerPrice},00</strong>
                    </>
                  ) : (
                    "R$ " + product.price + ",00"
                  )}
                  <button
                    className={styles.productCart}
                    onClick={
                      product.offer
                        ? () =>
                            addProductToCart(
                              product.id,
                              product.name,
                              product.offerPrice,
                              product.image
                            )
                        : () =>
                            addProductToCart(
                              product.id,
                              product.name,
                              product.price,
                              product.image
                            )
                    }
                  >
                    ADICIONAR <FaCartPlus size={20} color="#fff" />
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.team} id="professional">
        <span className={styles.title}>Nossos Colaboradores</span>
        <p className={styles.description}>
          Nossos funcionários são treinados para entender as necessidades
          individuais, proporcionando atendimento personalizado e consultoria de
          estilo. Com atenção aos detalhes, simpatia e profissionalismo,
          garantimos um ambiente acolhedor e eficiente, onde cada cliente se
          sente valorizado.
        </p>
        <div className={styles.teamImages}>
          {professionals.map((person) => (
            <div className={styles.teamImage} key={person.id}>
              <img src={person.img} alt="Colaborador" />
              <div className={styles.teamInfo}>
                <p className={styles.name}>{person.name}</p>
                <p className={styles.role}>{person.role}</p>
                <p className={styles.description}>{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.newsletter} id="contacts">
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
