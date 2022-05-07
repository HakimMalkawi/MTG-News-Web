import preloaderDark from "../resources/preloader-dark.png"
import preloaderLight from "../resources/preloader-light.png"
import "../styles/preloader.css"

const PreLoader = props => {
    const {dark} = props
    return  <main className="preloader-container"> 
                <img className="preloader-image" src={dark ? preloaderDark : preloaderLight} alt="loading..." /> 
            </main>}
export default PreLoader