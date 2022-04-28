import { useEffect } from "react"
import { toggleCurrentSetting } from "../helpers/toggleCurrentSetting"
import { toggleClass } from "../helpers/toggleClass"
import "../styles/back.css"
import "../styles/settings.css"

const Settings = props => {
    const {setMenu, setDarkMode} = props

    const toggleMenu = () => setMenu( prevMenu => ({ ...prevMenu, on: !prevMenu.on }) )

    const hideSettings = targetIndex => { 
        toggleMenu()
        toggleClass(".settings-container", "show-left")
        setTimeout( () => toggleCurrentSetting(setMenu, targetIndex) , 500 ) }

    useEffect( () => { 
        toggleClass(".settings-container", "show-left")
        setTimeout(toggleMenu, 500) }, [] )
    
    return <>  <main className="settings-container">
                    <button className="menu" onClick={ () => hideSettings(props.id) }>{"<"}</button>
                    <ul className="settings-options">
                        <li onClick={ () => setDarkMode( prevDarkMode => !prevDarkMode ) } className="settings-options-color">Toggle Color Scheme</li>
                    </ul>
                </main>  </> }
export default Settings