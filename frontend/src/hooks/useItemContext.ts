import React from "react";
import { ItemContext } from "../contexts/itemsContext";

export const useItemContext = () => {
  const context = React.useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItemContext deve ser usado com ItemProvider");
  }
  return context;
};
