import { useState } from "react"
import Language from "./Language"
import Menu from "./Menu"
import "../styles/navbar.css"

const Navbar = props => {
    const [toggle, setToggle] = useState(false)

    return  <>
            <header className="navbar-container">
                <nav className="navbar-content">
                    <Language 
                        language={props.language} 
                        setLanguage={props.setLanguage} 
                        home={props.home} 
                        setShowPost={props.setShowPost}
                        setHome={props.setHome} 
                        setContent={props.setContent} 
                        setCurrentPostData={props.setCurrentPostData} />
                    <Menu />
                </nav>
            </header>
            </> }
export default Navbar