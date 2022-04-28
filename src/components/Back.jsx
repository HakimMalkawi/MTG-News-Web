import "../styles/back.css"

const Back = props => {    
    const {back, reset, className, language} = props
    return  <button onClick={ () => { back(prevState => !prevState); reset(null) } }
                    className={`${className} ${language ? "en" : "ru"}`} >{"<"}</button> }
export default Back