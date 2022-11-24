import React from 'react'
import { useState , useContext , createContext } from 'react'


export default function Context() {
const themeContext = createContext();

const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ theme , ...rest}) => {
    const [theme , setTheme] = useState(theme);

    return <themeContext.Provider value={[theme , setTheme]}/>
};

const Toolbar = () => {
    const [theme , setTheme] = useTheme();
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Change Theme
        </button>
    )
}


 //llamado
   return (
        <ThemeProvider theme="light">
            <Toolbar/>
        </ThemeProvider>

   )
}