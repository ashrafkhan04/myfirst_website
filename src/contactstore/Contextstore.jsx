import { createContext, useState } from "react";
import { Items_types } from "../assets/Assets";

export const ContetStore = createContext();

const ContetStoreProvider = ({ children }) => {
  const [CartsItem, setCartsItem] = useState({});

  const addtoCart = (itemId) => {
    if (!CartsItem[itemId]) {
      setCartsItem((pres) => ({ ...pres, [itemId]: 1 }));
    } else {
      setCartsItem((pres) => ({ ...pres, [itemId]: pres[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartsItem((pres) => ({ ...pres, [itemId]: pres[itemId] - 1 }));
  };

  const TotalAmountButton = () => {
    let TotalAmount = 0;
    for (const item in CartsItem) {
      if (CartsItem[item] > 0) {
        let TotalAmountInfo = Items_types.find(
          (product) => product.id === item
        );
        TotalAmount += TotalAmountInfo.price * CartsItem[item];
      }
    }
    return TotalAmount;
  };

  const providervalue = {
    Items_types,
    addtoCart,
    CartsItem,
    setCartsItem,
    removeFromCart,
    TotalAmountButton,
  };

  return (
    <ContetStore.Provider value={providervalue}>
      {children}
    </ContetStore.Provider>
  );
};
export default ContetStoreProvider;
