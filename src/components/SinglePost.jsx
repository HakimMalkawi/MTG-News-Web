import { useRef } from "react"
import DOMPurify from "dompurify"
import Back from "./Back"
import "../styles/single-post.css"

const SinglePost = props => {
    const { setRenderSinglePost, singlePostContent, setSinglePostContent  } = props
    const singlePost = useRef(null)
    const classNamesForToggle = [singlePost, "hide-right"]

    return <>   <main ref={singlePost} className="single-post" aria-label="News Article" >
                    <img src={singlePostContent.image} alt="News Article" />
                    <div className="single-post-content" 
                         aria-label="News Article Content" 
                         dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(singlePostContent.content) } } />
                    <Back setShowState={setRenderSinglePost} 
                          reset={setSinglePostContent}
                          className="single" 
                          classNamesForToggle={classNamesForToggle} />
                </main>  </> }
export default SinglePost