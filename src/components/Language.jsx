import "../styles/language.css"

const Language = props => {
    const {language, setLanguage, home, setHome, setContent, setCurrentPostData, setShowPost} = props

    const refresh = () => {
        if(!home) {
            setHome(true)
            setContent(null)
            setCurrentPostData(null)
            setShowPost(false)  } }
    
    const handleClick = mainLanguage => {
        if(language !== mainLanguage) {
            setLanguage(mainLanguage)
            refresh()   } }

    return <>   <select className={`language-switcher ${language ? "EN" : "RU"}`}>
                    <option onClick={() => handleClick(true)}>EN</option>
                    <option onClick={() => handleClick(false)}>RU</option>
                </select>   </> }
export default Language