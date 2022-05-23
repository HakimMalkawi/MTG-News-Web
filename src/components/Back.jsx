import { hideSelectedMenuOption } from "../helpers/navigationFlow"
import "../styles/back.css"

const Back = props => {    
        const { setShowState, 
                reset = () => {}, 
                language = true,
                className, 
                classNamesForToggle,
                id = false } = props

        const handleClick = () => {
                hideSelectedMenuOption(setShowState, classNamesForToggle, id)
                reset(null) }
                
        return  <button onClick={handleClick} className={`${className} ${language ? "en" : "ru"}`} aria-label="Go Back" >
                        {"<"}
                </button> }
export default Back