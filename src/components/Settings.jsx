import { useEffect } from "react"
import { showSelectedMenuOption, hideSelectedMenuOption} from "../helpers/navigationFlow"
import "../styles/settings.css"

const Settings = props => {
    const {setMenu, darkMode, setDarkMode, id} = props
    const classNamesForToggle = ["settings-container", "show-left"]
    useEffect( () => showSelectedMenuOption(setMenu, classNamesForToggle), [] )
    
    return <>  <main className="settings-container">
                    <button className="menu" onClick={ () => hideSelectedMenuOption(setMenu, id, classNamesForToggle) }>{"<"}</button>
                    <ul className="settings-options">
                        <li onClick={ () => setDarkMode( prevDarkMode => !prevDarkMode ) } 
                            className={`settings-option ${darkMode ? "on" : "off"}`}><p>Dark Mode</p><span></span>
                        </li>
                    </ul>
                </main>  </> }
export default Settings