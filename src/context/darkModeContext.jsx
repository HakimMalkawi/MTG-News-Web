import { createContext, useState } from "react"

export const DarkMode = createContext()

export const DarkModeProvider = ( { children } ) => { 
        const [darkMode, setDarkMode] = useState( localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")).darkMode : true )
        return  <DarkMode.Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}} > {children} </DarkMode.Provider> }