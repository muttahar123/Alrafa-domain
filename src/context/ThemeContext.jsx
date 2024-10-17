import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    //? Check for saved theme on component mount
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      }
    }, []);
  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}
