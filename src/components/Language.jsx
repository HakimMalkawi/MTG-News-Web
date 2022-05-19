import Selector from "./Selector"

const Language = props => {
    const { language, setLanguage, refresh } = props

    const handleClick = mainLanguage => {
        if (language !== mainLanguage) {
                setLanguage(mainLanguage)
                refresh()   } }

    const languageSelector = {
        label: `${language ? "EN" : "RU"}`,
        list: [ {content: "EN", function: () => handleClick(true)}, {content: "RU", function: () => handleClick(false)}] }

    return <Selector render={languageSelector} /> }
export default Language