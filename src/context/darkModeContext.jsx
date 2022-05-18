import { createContext, useState } from "react"

const {Provider, Consumer} = createContext()

export const DarkModeProvider = ({props: children}) => { 
        const [darkMode, setDarkMode] = useState(true)
        return  <Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}>{children}</Provider> }

export {Consumer as DarkModeConsumer}