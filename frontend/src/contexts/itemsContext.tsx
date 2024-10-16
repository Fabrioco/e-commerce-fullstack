import React from "react";

type ItemContextType = {
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;

  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;

  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  qntItem: number;
};

type ItemProviderProps = {
  children: React.ReactNode;
};

export interface Product {
  id?: number;
  name: string;
  categoria?: string;
  price: number;
  image: string;
  offer?: boolean;
  offerPrice?: number;
  popular?: boolean;
  new?: boolean;
}

export const ItemContext = React.createContext<ItemContextType | undefined>(
  undefined
);

export const ItemProvider = ({ children }: ItemProviderProps) => {
  const [items, setItems] = React.useState<Product[]>([]);
  const [value, setValue] = React.useState(0);
  const [name, setName] = React.useState("");
  const [qntItem, setQntItem] = React.useState<number>(0);

  React.useEffect(() => {
    const loadCart = () => {
      const cart = localStorage.getItem("items");
      if (cart) {
        const cartObj = JSON.parse(cart);
        setItems(cartObj);
      }
      const quantidade = items.map((item) => item.name);
      setQntItem(quantidade.length);
    };
    loadCart();
  }, [items]);

  return (
    <ItemContext.Provider
      value={{ items, setItems, value, setValue, name, setName, qntItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};
