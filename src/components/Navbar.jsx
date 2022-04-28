import Language from "./Language"
import "../styles/navbar.css"

const Navbar = props => {
    const {language, setLanguage, home, setHome, setToggleMenu, setHideLayout, setContent, setCurrentPostData, setShowPost} = props

    const hideOverlay = () => { setToggleMenu(prevToggleMenu => !prevToggleMenu); setTimeout( () => setHideLayout(true), 500)    }

    return  <>  <header className="navbar-container">
                    <nav className="navbar-content">
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
export default Navbar