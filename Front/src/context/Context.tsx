import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export default function AppContextProvider({ children }: any) {
  const [products, setProducts] = useState<any>([]);
  const [name, setName] = useState<any>()

  return (
    <AppContext.Provider value={{ products, setProducts, name, setName }}>
      {children}
    </AppContext.Provider>
  );
}