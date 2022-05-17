import { memo } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import { nanoid } from "nanoid"
import Language from "./Language"
import Back from "./Back"
import "../styles/navbar.css"

const Navbar = props => {
    const { language, setLanguage, home, setHome, setToggleMenu, setRenderApp, setContent, currentCategoryId, setCurrentPostData, showPost, setShowPost, setSelectedYear, darkMode } = props

    const hideOverlay = () => { 
        setToggleMenu(prevToggleMenu => !prevToggleMenu)
        setTimeout( () => setRenderApp(prevRenderApp => !prevRenderApp), 500)    }

    const years = new Array(new Date().getFullYear() - 2015).fill("") ; years.forEach( (iteration, index, array) => array[index] = 2016 + index )

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

                        { !home && !showPost && 
                        <ul className="navbar-year-selector-container"> 
                            { years.map( year => <li key={nanoid()} 
                                                     onClick={ event => { 
                                                        setSelectedYear(event.target.innerText) 
                                                        setContent(null)
                                                        fetchSelectedPosts(setContent, currentCategoryId, language ? "en" : "ru", false, "", event.target.innerText) }} 
                                                     className="navbar-year-selector-item">{year}</li> ) } 
                        </ul> }

                        <ul className="navbar-menu-toggle" onClick={hideOverlay}><li></li><li></li><li></li></ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)