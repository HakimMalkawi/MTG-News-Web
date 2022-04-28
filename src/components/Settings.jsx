import { useEffect } from "react"
import "../styles/back.css"
import "../styles/settings.css"

const Settings = props => {
    const hideSettings = () => {
        props.setOptions(prevOptions => ({ ...prevOptions, on: !prevOptions.on }) )
        document.querySelector(".settings-container").classList.toggle("show-left")
        setTimeout(() => props.setOptions(prevOptions => ({ ...prevOptions, settings: !prevOptions.settings } ) ), 500 ) }

    useEffect( () => {
        document.querySelector(".settings-container").classList.toggle("show-left")
        setTimeout( () => props.setOptions(prevOptions => ({ ...prevOptions, on: !prevOptions.on })), 500) }, [] )

    return <>  <main className="settings-container">
                    <button className="menu" onClick={hideSettings}>{"<"}</button>
                    <ul className="settings-options">
                        <li onClick={ () => props.setDarkMode(prevDarkMode => !prevDarkMode)} className="settings-options-color">Toggle Color Scheme</li>
                    </ul>
                </main>  </> }
export default Settings