import "../styles/language.css"

const Language = props => {
    const {language, setLanguage, home, setHome, setContent, setCurrentPostData, setShowPost} = props
    return <>   <button onClick={ () => {
                setLanguage(prevLanguage => !prevLanguage)
                if(!home) {
                    setHome(true) 
                    setContent(null)
                    setShowPost(false)
                    setCurrentPostData(null) } } } className={`language-switcher ${language ? "EN" : "RU"}`}></button>  </> }

export default Language