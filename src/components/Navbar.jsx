import Language from "./Language"
import "../styles/navbar.css"

const Navbar = props => {
    const hideOverlay = () => {
        props.setToggleMenu(prevToggleMenu => !prevToggleMenu)
        setTimeout(()=>props.setHideLayout(true), 500)    }
return  <>  <header className="navbar-container">
                <nav className="navbar-content">
                    <Language 
                        language={props.language} 
                        setLanguage={props.setLanguage} 
                        home={props.home} 
                        setShowPost={props.setShowPost}
                        setHome={props.setHome} 
                        setContent={props.setContent} 
                        setCurrentPostData={props.setCurrentPostData} />
                    <ul className="navbar-menu-toggle" onClick={hideOverlay}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </header>   </> }

export default Navbar