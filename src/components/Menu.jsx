import { Fragment, useState, useEffect } from "react"
import { toggleCurrentSetting, toggleClass } from "../helpers/navigationFlow"
import { menuCategories } from "../data/menuCategories"
import { nanoid } from "nanoid"
import Settings from "./Settings"
import PrivacyPolicy from "./PrivacyPolicy"
import "../styles/menu.css"

const Menu = props => {
    const { setRenderMenu, 
            setRenderAllExceptMenu, 
            setRenderHome, 
            setBulkPostContent, 
            language } = props

    const [menu, setMenu] = useState(menuCategories)
    
    const classNamesForToggle = ["menu-container", "show-right"]

    useEffect( () => { 
        if(menu.options[0].show) { hideMenu() ; setRenderHome(true); toggleClass(classNamesForToggle); setBulkPostContent(null) } }, [menu.options])
        
    useEffect( () => { if(!menu.on) toggleClass(classNamesForToggle) }, [menu.on])

    const hideMenu = () => {
        setRenderAllExceptMenu(prevRenderState => !prevRenderState)
        toggleClass(classNamesForToggle)
        setTimeout( () => setRenderMenu(prevRenderState => !prevRenderState), 500) }

    const selectMenuItem = targetIndex => {
        toggleCurrentSetting(setMenu, targetIndex)
        toggleClass(classNamesForToggle)    } 

    const menuItems = menu.options.map( (option, index) =>
        <Fragment key={nanoid()}>  
            <li onClick={() => selectMenuItem(index)} className="menu-item">{language ? option.name.en : option.name.ru}</li>
            <hr  className="menu-item-separator" /> 
        </Fragment> ) 

    return  <>  { !menu.on &&
                    <main className="menu-container">
                        <ul className="menu-toggle" onClick={hideMenu}><li></li><li></li></ul>
                        <ul className={`menu-content ${language ? "en" : "ru"}`}>{menuItems}</ul>
                    </main> } 
                { menu.options[1].show && 
                    <Settings id={1} setMenu={setMenu} language={language}/> }    
                { menu.options[2].show && 
                    <PrivacyPolicy id={2} setMenu={setMenu} language={language} /> } </> }
export default Menu