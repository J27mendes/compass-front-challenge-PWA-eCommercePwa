import { createContext, useState } from "react";

export const AppContext = createContext<any>({});

export function AppContextProvider({ children }: any) {
  const [products, setProducts] = useState<any>([]);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}