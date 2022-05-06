import { useState } from "react"
import "../styles/language.css"

const Language = props => {
    const {language, setLanguage, home, setHome, setContent, setCurrentPostData, setShowPost} = props
    const [toggle, setToggle] = useState(false)

    const refresh = () => {
        if(!home) {
            setHome(true)
            setContent(null)
            setCurrentPostData(null)
            setShowPost(false)  } }
    
    const handleClick = mainLanguage => {
        setToggle(prevToggle => !prevToggle)
        if(language !== mainLanguage) {
            setLanguage(mainLanguage)
            refresh()   } }

    return <>   <div className="language-selector">
                    <label onClick={() => setToggle(prevToggle => !prevToggle)} className={`language-label ${toggle ? "closed" : "open"}`}> 
                        {language ? "EN" : "RU"}
                    </label>
                    <ul className="language-list">
                        <li onClick={() => handleClick(true)}>EN</li>
                        <li onClick={() => handleClick(false)}>RU</li>
                    </ul>
                </div> </> }
export default Language