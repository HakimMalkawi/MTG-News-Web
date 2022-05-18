import { memo, useEffect } from "react"
import { DarkModeConsumer } from "../context/darkModeContext"
import { showSelectedMenuOption } from "../helpers/navigationFlow"
import Back from "./Back"
import "../styles/settings.css"

const Settings = props => {
    const { setMenu, id, language } = props

    const classNamesForToggle = ["settings-container", "show-left"]
    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle), [] )
    
    return  <DarkModeConsumer>
                { ( { darkMode, setDarkMode } ) =>
                    <main className="settings-container">
                        <Back setShowState={setMenu} classNamesForToggle={classNamesForToggle} id={id} className="menu" />
                        <ul className="settings-options">
                            <li onClick={ () => setDarkMode( prevDarkMode => !prevDarkMode ) } 
                                className={`settings-option ${darkMode ? "on" : "off"}`}><p>{language ? "Dark Mode" : "Тёмный режим"}</p>
                                <div>
                                    <span></span>
                                </div>
                            </li>
                        </ul>
                    </main> }
            </DarkModeConsumer> }
export default memo(Settings)