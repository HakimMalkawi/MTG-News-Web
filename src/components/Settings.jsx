import { useEffect } from "react"
import { showSelectedMenuOption } from "../helpers/navigationFlow"
import Back from "./Back"
import "../styles/settings.css"

const Settings = props => {
    const {setMenu, darkMode, setDarkMode, id, language} = props
    const classNamesForToggle = ["settings-container", "show-left"]
    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle), [] )
    
    return <>  <main className="settings-container">
                    <Back setShowState={setMenu} classNamesForToggle={classNamesForToggle} id={id} className="menu" />
                    <ul className="settings-options">
                        <li onClick={ () => setDarkMode( prevDarkMode => !prevDarkMode ) } 
                            className={`settings-option ${darkMode ? "on" : "off"}`}><p>{language ? "Dark Mode" : "Тёмный режим"}</p><span></span>
                        </li>
                    </ul>
                </main>  </> }
export default Settings