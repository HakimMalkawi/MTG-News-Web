import { memo, useEffect } from "react"
import { DarkModeConsumer } from "../context/darkModeContext"
import { showSelectedMenuOption } from "../helpers/navigationFlow"
import Back from "./Back"
import "../styles/settings.css"

const Settings = props => {
    const { setMenu, language, id } = props

    const classNamesForToggle = ["settings-container", "show-left"]
    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle), [] )
    
    return  <DarkModeConsumer>
                { ( { darkMode, setDarkMode } ) =>
                    <main aria-label="Settings Page" className="settings-container">
                        <Back setShowState={setMenu} classNamesForToggle={classNamesForToggle} id={id} className="menu" />
                        <ul aria-label="Settings Options" className="settings-options">
                            <li onClick={ () => setDarkMode( prevDarkMode => !prevDarkMode ) } 
                                aria-label="Dark Mode"
                                className={`settings-option ${darkMode ? "on" : "off"}`}><p>{language ? "Dark Mode" : "Тёмный режим"}</p>
                                <div aria-label="Toggle">
                                    <span></span>
                                </div>
                            </li>
                        </ul>
                    </main> }
            </DarkModeConsumer> }
export default memo(Settings)