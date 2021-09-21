import { createContext, useReducer, useContext } from "react";

export const Store = createContext();
Store.displayName = "Store";

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
