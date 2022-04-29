import { useState, useEffect } from "react"
import { toggleCurrentSetting } from "../helpers/toggleCurrentSetting"
import { toggleClass } from "../helpers/toggleClass"
import { menuCategories } from "../data/menuCategories"
import { nanoid } from "nanoid"
import Settings from "./Settings"
import "../styles/menu.css"

const Menu = props => {
    const {setToggleMenu, setRenderApp, darkMode, setDarkMode} = props
    const [menu, setMenu] = useState(menuCategories)

    useEffect( () => !menu.on && toggleClass(".menu-container", "show-right"), [menu.on])

    const hideMenu = () => {
        setRenderApp(prevRenderApp => !prevRenderApp)
        toggleClass(".menu-container", "show-right")
        setTimeout( () => setToggleMenu(prevToggle => !prevToggle), 500) }

    const selectMenuItem = targetIndex => {
        toggleCurrentSetting(setMenu, targetIndex)
        toggleClass(".menu-container", "show-right")    } 

    const menuItems = menu.options.map( (option, index) =>
        <li onClick={() => selectMenuItem(index)} className="menu-item" key={nanoid()} >{option.name}<hr className="menu-item-separator" /></li>) 

    return  <>  { !menu.on &&
                    <main className="menu-container">
                        <ul className="menu-toggle" onClick={hideMenu}><li></li><li></li></ul>
                        <ul className="menu-content">{menuItems}</ul>
                    </main> } 
                    
                { menu.options[0].show && <Settings id={0} setMenu={setMenu} darkMode={darkMode} setDarkMode={setDarkMode} /> }    </> }
export default Menu