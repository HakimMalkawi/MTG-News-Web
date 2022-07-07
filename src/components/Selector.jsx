import { useState, Fragment } from "react"
import { nanoid } from "nanoid"
import "../styles/selector.css"

const Selector = props => {
    const [toggle, setToggle] = useState(false)
    const { render: { label, list }, id = "", style = false } = props

    const handleLabelClick = () => setToggle(prevToggle => !prevToggle)
    const handleListItemClick = (listItem, event) => { listItem.function(event); setToggle(false) }

    return  <>   <div style={ style ? style : { margin: "auto" } } className="selector-container" aria-label="Selector" >
                    <label onClick={handleLabelClick} className={`selector-label ${toggle ? "open" : "closed"}`} id={id} >
                        {label}
                    </label>
                    <ul className="selector-list" aria-label="Choices" >
                        {list.map( (listItem, index) => 
                            <Fragment key={nanoid()} >
                                <li onClick={event => handleListItemClick(listItem, event)} >
                                    {listItem.content}
                                </li>
                                {index !== list.length - 1 && <hr />}
                            </Fragment> ) }
                    </ul>
                </div>  </> }
export default Selector