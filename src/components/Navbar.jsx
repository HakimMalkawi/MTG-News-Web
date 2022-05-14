import { memo } from "react"
import Language from "./Language"
import Back from "./Back"
import "../styles/navbar.css"

const Navbar = props => {
    const {language, setLanguage, home, setHome, setToggleMenu, setRenderApp, setContent, setCurrentPostData, showPost, setShowPost, darkMode} = props

    const hideOverlay = () => { 
        setToggleMenu(prevToggleMenu => !prevToggleMenu)
        setTimeout( () => setRenderApp(prevRenderApp => !prevRenderApp), 500)    }

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
                        <ul className="navbar-menu-toggle" onClick={hideOverlay}><li></li><li></li><li></li></ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)