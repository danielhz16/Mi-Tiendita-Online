import { createContext, useContext, useState, ReactNode } from "react";
import { MenuContextProps } from "./interfaces/MenuContextProps";

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};