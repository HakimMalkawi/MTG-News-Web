import Selector from "./Selector"

const Language = props => {
    const {language, setLanguage, home, setHome, setContent, setCurrentPostData, setShowPost} = props

    const refresh = () => {
        if(!home) {
            setHome(true)
            setContent(null)
            setCurrentPostData(null)
            setShowPost(false)  } }
    
    const handleClick = mainLanguage => {
        if (language !== mainLanguage) {
                setLanguage(mainLanguage)
                refresh()   } }

    const languageSelector = {
        label: `${language ? "EN" : "RU"}`,
        list: [ {content: "EN", function: () => handleClick(true)}, {content: "RU", function: () => handleClick(false)}] }

    return <Selector render={languageSelector} /> }
export default Language