import { DarkModeConsumer } from "../context/darkModeContext"
import preloaderDark from "../resources/preloader-dark.png"
import preloaderLight from "../resources/preloader-light.png"
import "../styles/preloader.css"

const PreLoader = () =>
    <DarkModeConsumer>
        { ( { darkMode } ) => 
            <main className="preloader-container"> 
                <img className="preloader-image" src={darkMode ? preloaderDark : preloaderLight} alt="loading..." /> 
            </main> }  
    </DarkModeConsumer>
export default PreLoader