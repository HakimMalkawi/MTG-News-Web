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
        if (document.querySelector(".language-container").classList.contains("slide-over-right"))
            document.querySelector(".language-container").classList.remove("slide-over-right")
        if (language !== mainLanguage) {
                setLanguage(mainLanguage)
                refresh()   } }

    return <>   <div className="language-container">
                    <label onClick={() => setToggle(prevToggle => !prevToggle)} className={`language-label ${toggle ? "open" : "closed"}`}> 
                        {language ? "EN" : "RU"}
                    </label>
                    <ul className="language-list">
                        <li onClick={() => handleClick(true)}>EN</li>
                        <hr/>
                        <li onClick={() => handleClick(false)}>RU</li>
                    </ul>
                </div> </> }
export default Language