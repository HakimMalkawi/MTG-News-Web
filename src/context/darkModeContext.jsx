import { createContext, useState } from "react"

const {Provider, Consumer} = createContext()

export const DarkModeProvider = ( { children } ) => { 
        const [darkMode, setDarkMode] = useState( localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")).darkMode : true )
        return  <Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}>{children}</Provider> }
export {Consumer as DarkModeConsumer}