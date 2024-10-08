import React from "react";

type ItemContextType = {
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;

  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;

  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

type ItemProviderProps = {
  children: React.ReactNode;
};

export const ItemContext = React.createContext<ItemContextType | undefined>(
  undefined
);

export const ItemProvider = ({ children }: ItemProviderProps) => {
  const [item, setItem] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <ItemContext.Provider
      value={{ item, setItem, value, setValue, name, setName }}
    >
      {children}
    </ItemContext.Provider>
  );
};
