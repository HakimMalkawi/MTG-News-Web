import { useEffect } from "react"
import "../styles/back.css"
import "../styles/settings.css"

const Settings = props => {
    const {setMenu, setDarkMode} = props

    useEffect( () => {
        document.querySelector(".settings-container").classList.toggle("show-left")
        setTimeout( () => setMenu(prevMenu => ({ ...prevMenu, on: !prevMenu.on })), 500) }, [] )

    const hideSettings = targetIndex => {
        setMenu(prevMenu => ({ ...prevMenu, on: !prevMenu.on }) )
        document.querySelector(".settings-container").classList.toggle("show-left")
        setTimeout(() => setMenu(prevMenu => ({ ...prevMenu, options: prevMenu.options.map((option, index) => {
            return index === targetIndex ? {...option, show: !option.show} : option
        }) } ) ), 500 ) }

    return <>  <main className="settings-container">
                    <button className="menu" onClick={()=>hideSettings(props.id)}>{"<"}</button>
                    <ul className="settings-options">
                        <li onClick={ () => setDarkMode(prevDarkMode => !prevDarkMode)} className="settings-options-color">Toggle Color Scheme</li>
                    </ul>
                </main>  </> }
export default Settings