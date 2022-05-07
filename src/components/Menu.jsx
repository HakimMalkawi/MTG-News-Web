import { useState, useEffect } from "react"
import { toggleCurrentSetting, toggleClass } from "../helpers/navigationFlow"
import { menuCategories } from "../data/menuCategories"
import { nanoid } from "nanoid"
import Settings from "./Settings"
import PrivacyPolicy from "./PrivacyPolicy"
import "../styles/menu.css"

const Menu = props => {
    const {setToggleMenu, setRenderApp, darkMode, setDarkMode} = props
    const [menu, setMenu] = useState(menuCategories)
    const classNamesForToggle = ["menu-container", "show-right"]

    useEffect( () => { if(!menu.on) toggleClass(classNamesForToggle) }, [menu.on])

    const hideMenu = () => {
        setRenderApp(prevRenderApp => !prevRenderApp)
        toggleClass(classNamesForToggle)
        setTimeout( () => setToggleMenu(prevToggle => !prevToggle), 500) }

    const selectMenuItem = targetIndex => {
        toggleCurrentSetting(setMenu, targetIndex)
        toggleClass(classNamesForToggle)    } 

    const menuItems = menu.options.map( (option, index) =>
        <li onClick={() => selectMenuItem(index)} className="menu-item" key={nanoid()} >{option.name}<hr className="menu-item-separator" /></li>) 

    return  <>  { !menu.on &&
                    <main className="menu-container">
                        <ul className="menu-toggle" onClick={hideMenu}><li></li><li></li></ul>
                        <ul className="menu-content">{menuItems}</ul>
                    </main> } 
                    
                { menu.options[0].show && 
                    <Settings id={0} setMenu={setMenu} darkMode={darkMode} setDarkMode={setDarkMode} /> }    
                { menu.options[1].show && 
                    <PrivacyPolicy id={1} setMenu={setMenu} /> } </> }
export default Menu