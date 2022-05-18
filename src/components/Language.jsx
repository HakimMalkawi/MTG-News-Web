import Selector from "./Selector"

const Language = props => {
    const {language, setLanguage, renderHome, setRenderHome, setBulkPostContent, setCurrentPostData, setRenderSinglePost} = props

    const refresh = () => {
        if(!renderHome) {
            setRenderHome(true)
            setBulkPostContent(null)
            setCurrentPostData(null)
            setRenderSinglePost(false)  } }
    
    const handleClick = mainLanguage => {
        if (language !== mainLanguage) {
                setLanguage(mainLanguage)
                refresh()   } }

    const languageSelector = {
        label: `${language ? "EN" : "RU"}`,
        list: [ {content: "EN", function: () => handleClick(true)}, {content: "RU", function: () => handleClick(false)}] }

    return <Selector render={languageSelector} /> }
export default Language