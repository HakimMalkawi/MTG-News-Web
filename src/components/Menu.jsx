import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Settings from "./Settings"
import "../styles/menu.css"

const Menu = props => {
    const {setToggleMenu, setRenderApp, setDarkMode} = props
    const [menu, setMenu] = useState( { on: false, 
                                        options: [ { show: false, name: "Settings" }, { show: false, name: "Privacy Policy" } ] })

    useEffect( () => !menu.on && document.querySelector(".menu-container").classList.add("show-right"), [menu.on])

    const hideMenu = () => {
        setRenderApp(prevRenderApp => !prevRenderApp)
        document.querySelector(".menu-container").classList.toggle("show-right")
        setTimeout( () =>setToggleMenu(prevToggle => !prevToggle), 500) }

    const selectMenuItem = targetIndex => {
        setMenu(prevMenu => ({ ...prevMenu, options: prevMenu.options.map((option, index) => 
                                                                index === targetIndex ? {...option, show: !option.show} : option ) }) )
        document.querySelector(".menu-container").classList.toggle("show-right")    } 

    const menuItems = menu.options.map( (option, index) => {
        return <li onClick={() => selectMenuItem(index)} className="menu-item" key={nanoid()}>{option.name}</li> } ) 

    return  <>  { !menu.on &&
                    <main className="menu-container">
                        <ul className="menu-toggle" onClick={hideMenu}><li></li><li></li></ul>
                        <ul className="menu-content">{menuItems}</ul>
                    </main> } 
                    
                { menu.options[0].show && <Settings id={0} setMenu={setMenu} setDarkMode={setDarkMode} /> }    </> }
export default Menu