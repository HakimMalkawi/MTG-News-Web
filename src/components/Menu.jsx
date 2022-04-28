import { useState, useEffect } from "react"
import Settings from "./Settings"
import "../styles/menu.css"

const Menu = props => {
    const {setToggleMenu, setHideLayout} = props
    const [options, setOptions] = useState({ on: false, settings: false, privacy_policy: false })

    useEffect( () => !options.on && document.querySelector(".menu-container").classList.add("show-right"), [options.on])

    const hideMenu = () => {
        setHideLayout(prevHideLayout => !prevHideLayout)
        document.querySelector(".menu-container").classList.toggle("show-right")
        setTimeout( () =>setToggleMenu(prevToggle => !prevToggle), 500) }

    return  <>  { !options.on &&
                    <main className="menu-container">
                        <ul className="menu-toggle" onClick={hideMenu}><li></li><li></li></ul>
                        <ul className="menu-content">
                            <li onClick={ () => {   setOptions(prevOptions => ({ ...prevOptions, settings: !prevOptions.settings }) )
                                                    document.querySelector(".menu-container").classList.toggle("show-right")    } } 
                                className="menu-item">Settings</li>
                            <li className="menu-item">Privacy Policy</li>
                        </ul>
                    </main> } 
                    
                { options.settings && <Settings setOptions={setOptions} setDarkMode={props.setDarkMode} /> }    </> }
export default Menu