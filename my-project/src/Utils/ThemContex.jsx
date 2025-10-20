import { createContext, useState } from "react";

// Context creation 
export const ThemeProvider = createContext();

// Create contex Provider
const ThemContex = ({ children }) => {

 const[themeUser,setthemeUser] = useState("light");

    
  const modeChanger = () => {
    setthemeUser((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeProvider.Provider value={{themeUser,modeChanger}}>
        {children}
      </ThemeProvider.Provider>
    </>
  )
}

export default ThemContex;
