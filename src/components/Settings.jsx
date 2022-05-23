import { useEffect, useContext, useRef, memo } from "react"
import { DarkMode } from "../context/darkModeContext"
import { showSelectedMenuOption } from "../helpers/navigationFlow"
import Back from "./Back"
import "../styles/settings.css"


const Settings = props => {
    const { setMenu, language, setLanguage, refresh, id } = props
    const settingsContainer = useRef(null)
    const classNamesForToggle = [settingsContainer, "show-left"]

    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle), [] )

    const { darkMode, setDarkMode } = useContext(DarkMode)

    const colorScheme = () => {
        if (language) return darkMode ? "Dark Mode" : "Light Mode"
        return darkMode ? "Тёмный режим" : "Светлый режим" }

    const toggleDarkMode = () => setDarkMode( prevDarkMode => !prevDarkMode )
    const toggleLanguage = () => { setLanguage( prevLanguage => !prevLanguage ); refresh() }
    
    return  <main ref={settingsContainer} className="settings-container" aria-label="Settings Page" >
                <Back setShowState={setMenu} classNamesForToggle={classNamesForToggle} id={id} className="menu" />
                <ul className={`settings-options  ${language ? "en" : "ru"}`} aria-label="Settings Options" >
                    <li onClick={toggleDarkMode} className={`settings-option ${darkMode ? "on" : "off"}`} aria-label="Dark Mode" >
                        <p> { colorScheme() } </p>
                        <div aria-label="Toggle Dark Mode" > <span></span> </div>
                    </li>
                    <hr />
                    <li onClick={toggleLanguage} className={`settings-option ${language ? "on" : "off"}`} aria-label="Language Selector" >
                        <p>{language ? "English" : "Русский"}</p>
                        <div aria-label="Toggle Language" > <span></span> </div>
                    </li>
                </ul>
            </main> } 
export default memo(Settings)