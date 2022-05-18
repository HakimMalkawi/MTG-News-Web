import { Fragment, useState } from "react"
import { nanoid } from "nanoid"
import "../styles/selector.css"

const Selector = props => {
    const [toggle, setToggle] = useState(false)
    const { render: { label, list }, id = "test" } = props

    return  <>   <div className="selector-container">
                    <label onClick={() => setToggle(prevToggle => !prevToggle)} className={`selector-label ${toggle ? "open" : "closed"}`} id={id}>
                        {label}
                    </label>
                    <ul className="selector-list">
                        {list.map( (listItem, index) => 
                            <Fragment key={nanoid()}>
                                <li onClick={ event => { listItem.function(event); setToggle(false)}}>{listItem.content}</li>
                                {index !== list.length - 1 && <hr/>}
                            </Fragment>)}
                    </ul>
                </div>  </> }
export default Selector