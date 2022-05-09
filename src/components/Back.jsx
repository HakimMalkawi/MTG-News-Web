import { hideSelectedMenuOption } from "../helpers/navigationFlow"
import "../styles/back.css"

const Back = props => {    
    const {setShowState, className, classNamesForToggle, language = true, reset = () => {}, id = false} = props
    return  <button onClick={ () => { hideSelectedMenuOption(setShowState, classNamesForToggle, id); reset(null) } }
                    className={`${className} ${language ? "en" : "ru"}`} >{"<"}</button> }
export default Back