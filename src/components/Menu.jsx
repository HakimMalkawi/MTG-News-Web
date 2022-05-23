import { useState, useEffect, useRef, Fragment } from "react"
import { menuCategories } from "../data/menuCategories"
import { toggleCurrentSetting, toggleClass } from "../helpers/navigationFlow"
import { nanoid } from "nanoid"
import Settings from "./Settings"
import PrivacyPolicy from "./PrivacyPolicy"
import "../styles/menu.css"

const Menu = props => {
    const { setRenderAllExceptMenu, 
            setRenderMenu, 
            setRenderHome, 
            setBulkPostContent, 
            language,
            setLanguage,
            refresh } = props

    const menuContainer = useRef(null)
    const [menu, setMenu] = useState(menuCategories)
    
    const classNamesForToggle = [menuContainer, "show-right"]

    useEffect( () => { 
        if(menu.options[0].show) { 
            hideMenu()
            setRenderHome(true)
            toggleClass(classNamesForToggle)
            setBulkPostContent(null) } }, [menu.options])
        
    useEffect( () => { if(!menu.on) toggleClass(classNamesForToggle) }, [menu.on])

    const hideMenu = () => {
        setRenderAllExceptMenu(prevRenderState => !prevRenderState)
        toggleClass(classNamesForToggle)
        setTimeout( () => document.querySelector(".navbar-menu-toggle").classList.add("spin"), 10 )
        setTimeout( () => { setRenderMenu(prevRenderState => !prevRenderState)
                            document.querySelector(".navbar-menu-toggle").classList.remove("spin") }, 500) }

    const selectMenuItem = targetIndex => { toggleCurrentSetting(setMenu, targetIndex); toggleClass(classNamesForToggle) } 

    const menuItems = menu.options.map( (option, index) =>
        <Fragment key={nanoid()}>  
            <li onClick={() => selectMenuItem(index)} className="menu-item"  aria-label={option.name.en} >
                {language ? option.name.en : option.name.ru}
            </li>
            <hr className="menu-item-separator" /> 
        </Fragment> ) 

    return  <>  { !menu.on &&
                    <main ref={menuContainer} className="menu-container" aria-label="Main Menu" >
                        <ul onClick={hideMenu} className="menu-toggle" aria-label="Toggle Main Menu" ><li></li><li></li></ul>
                        <ul className={`menu-content ${language ? "en" : "ru"}`} aria-label="Menu Options" >{menuItems}</ul>
                    </main> } 
                { menu.options[1].show && 
                    <Settings setMenu={setMenu} language={language} setLanguage={setLanguage} refresh={refresh} id={1} /> }    
                { menu.options[2].show && 
                    <PrivacyPolicy setMenu={setMenu} language={language} id={2} /> } </> }
export default Menu