import { hideSelectedMenuOption } from "../helpers/navigationFlow"
import "../styles/back.css"

const Back = props => {    
    const { setShowState, 
            reset = () => {}, 
            language = true,
            className, 
            classNamesForToggle,
            id = false } = props
            
    return  <button onClick={ () => { hideSelectedMenuOption(setShowState, classNamesForToggle, id); reset(null) } }
                    aria-label="Go Back"
                    className={`${className} ${language ? "en" : "ru"}`} >{"<"}</button> }
export default Back