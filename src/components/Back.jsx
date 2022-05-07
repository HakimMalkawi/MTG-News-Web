import "../styles/back.css"

const Back = props => {    
    const {setShowState, className, language = true, reset = () => {}} = props
    return  <button onClick={ () => { setShowState(prevState => !prevState); reset(null) } }
                    className={`${className} ${language ? "en" : "ru"}`} >{"<"}</button> }
export default Back