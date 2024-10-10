import sapato from "../assets/images/sapato.png";
import tenis from "../assets/images/tenis.png";
import tenis2 from "../assets/images/tenis2.png";
import bolsa from "../assets/images/bolsa.png";
import bolsa2 from "../assets/images/bolsa2.png";
import vestido from "../assets/images/vestido.png";
import vestido2 from "../assets/images/vestido4.png";
import sapato2 from "../assets/images/sapato2.png";

export const products = [
  {
    id: 0,
    name: "Sapato Vermelho",
    categoria: "Sapatos",
    price: 100,
    image: sapato,
    offer: true,
    offerPrice: 50,
    popular: true,
  },
  {
    id: 1,
    name: "Tênis Branco Com Rosa",
    categoria: "Tenis",
    price: 150,
    image: tenis,
    new: true,
    popular: true,
  },
  {
    id: 2,
    name: "Bolsa Preta",
    categoria: "Bolsas",
    price: 250,
    image: bolsa,
  },
  {
    id: 3,
    name: "Vestido Vermelho",
    categoria: "Vestidos",
    price: 300,
    image: vestido,
    new: true,
    popular: true,
  },
  {
    id: 4,
    name: "Bolsa Azul",
    categoria: "Bolsas",
    price: 230,
    image: bolsa2,
    offer: true,
    offerPrice: 100,
    popular: true,
  },
  {
    id: 5,
    name: "Vestido Verde",
    categoria: "Vestidos",
    price: 350,
    image: vestido2,
  },
  {
    id: 6,
    name: "Sapato Amarelo",
    categoria: "Sapatos",
    price: 200,
    image: sapato2,
    new: true,
  },
  {
    id: 7,
    name: "Tênis Cinza Com Rosa",
    categoria: "Tenis",
    price: 130,
    image: tenis2,
    offer: true,
    offerPrice: 60,
  },
];
