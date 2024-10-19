import React from "react";

type ItemContextType = {
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;

  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;

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
  const [items, setItems] = React.useState<Product[]>(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [value, setValue] = React.useState(0);
  const [qntItem, setQntItem] = React.useState<number>(0);

  React.useEffect(() => {
    setQntItem(items.length);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, setItems, value, setValue, qntItem }}>
      {children}
    </ItemContext.Provider>
  );
};
