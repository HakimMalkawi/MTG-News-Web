import { memo } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import Language from "./Language"
import Selector from "./Selector"
import Back from "./Back"
import "../styles/navbar.css"

const Navbar = props => {
    const { language, setLanguage, home, setHome, setToggleMenu, setRenderApp, setContent, currentCategoryId, setCurrentPostData, showPost, setShowPost, selectedYear, setSelectedYear, darkMode } = props

    const hideOverlay = () => { 
        setToggleMenu(prevToggleMenu => !prevToggleMenu)
        setTimeout( () => setRenderApp(prevRenderApp => !prevRenderApp), 500) }

    const yearClick = event => {
        setSelectedYear(event.target.innerText) 
        setContent(null)
        fetchSelectedPosts(setContent, currentCategoryId, language ? "en" : "ru", false, "", event.target.innerText) }

    const currentYear = new Date().getFullYear()
    const years = new Array(currentYear - 2019).fill("") ; years.forEach( (iteration, index, array) => array[index] = 2020 + index )
    const yearSelector = { label: selectedYear ? selectedYear : currentYear, list: years.map( year => ({ content: year, function: yearClick } ) ) }

    return  <>  <header className="navbar-container">
                    <nav className="navbar-content">

                        { !home && !showPost && 
                        <Back   
                            setShowState={setHome} 
                            className={`nav ${darkMode ? "dark" : "light"}`}
                            classNamesForToggle={["all-posts", "hide-right"]} 
                            language={language} 
                            reset={setContent} /> }

                        <Language 
                            language={language} 
                            setLanguage={setLanguage} 
                            home={home} 
                            setHome={setHome} 
                            setContent={setContent} 
                            setCurrentPostData={setCurrentPostData} 
                            setShowPost={setShowPost} />

                        { !home && !showPost && <Selector render={yearSelector} id="year-selector" /> }

                        <ul className="navbar-menu-toggle" onClick={hideOverlay}><li></li><li></li><li></li></ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)