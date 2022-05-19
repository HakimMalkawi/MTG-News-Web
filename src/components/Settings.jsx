import { memo, useEffect } from "react"
import { DarkModeConsumer } from "../context/darkModeContext"
import { showSelectedMenuOption } from "../helpers/navigationFlow"
import Language from "./Language"
import Back from "./Back"
import "../styles/settings.css"


const Settings = props => {
    const { setMenu, language, setLanguage, id } = props

    const classNamesForToggle = ["settings-container", "show-left"]
    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle), [] )
    
    return  <DarkModeConsumer>
                { ( { darkMode, setDarkMode } ) => {
                    
                const colorScheme = () => {
                    if (language) return darkMode ? "Dark Mode" : "Light Mode"
                    return darkMode ? "Тёмный режим" : "Светлый режим" }
                
                return  <main aria-label="Settings Page" className="settings-container">
                            <Back setShowState={setMenu} classNamesForToggle={classNamesForToggle} id={id} className="menu" />
                            <ul aria-label="Settings Options" className={`settings-options  ${language ? "en" : "ru"}`}>
                                <li onClick={ () => setDarkMode( prevDarkMode => !prevDarkMode ) } 
                                    aria-label="Dark Mode"
                                    className={`settings-option ${darkMode ? "on" : "off"}`}>
                                    <p> { colorScheme() } </p>
                                    <div aria-label="Toggle Dark Mode">
                                        <span></span>
                                    </div>
                                </li>
                                <hr/>
                                <li onClick={ () => setLanguage( prevLanguage => !prevLanguage ) } 
                                    aria-label="Language Selector" 
                                    className={`settings-option ${language ? "on" : "off"}`}>
                                    <p>{language ? "English" : "Русский"}</p>
                                    <div aria-label="Toggle Language">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </main> } }
            </DarkModeConsumer> }
export default memo(Settings)