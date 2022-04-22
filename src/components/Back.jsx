import "../styles/back.css"

const Back = props => 
    <button className={props.class} onClick={() => {
        props.back(prevState => !prevState)
        props.reset(null)   } } >{"<"}</button>
export default Back