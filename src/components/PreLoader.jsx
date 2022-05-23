import { useContext } from "react"
import { DarkMode } from "../context/darkModeContext"
import preloaderDark from "../resources/preloader-dark.png"
import preloaderLight from "../resources/preloader-light.png"
import "../styles/preloader.css"

const PreLoader = () => {
    const { darkMode } = useContext(DarkMode)

    return  <main className="preloader-container" > 
                <img src={darkMode ? preloaderDark : preloaderLight} alt="loading..." className="preloader-image" /> 
            </main> }  
export default PreLoader