import { useEffect } from "react"
import "../styles/menu.css"

const Menu = props => {
const hideMenu = () => {
    props.setHideLayout(prevHideLayout => !prevHideLayout)
    document.querySelector(".menu-container").classList.remove("show")
    setTimeout(()=>props.setToggleMenu(prevToggle => !prevToggle), 500) }

useEffect(()=>document.querySelector(".menu-container").classList.add("show"), [])

return  <>  <section className="menu-container">
                <ul className="menu-toggle" onClick={hideMenu}>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="menu-content">
                    <li className="menu-item">Settings</li>
                    <li className="menu-item">Privacy Policy</li>
                </ul>
            </section>  </> }

export default Menu