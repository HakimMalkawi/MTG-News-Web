import DOMPurify from "dompurify"
import Back from "./Back"
import "../styles/single-post.css"

const SinglePost = props => {
    const { setRenderSinglePost, singlePostContent, setSinglePostContent  } = props
    const classNamesForToggle = ["single-post", "hide-right"]

    return <>   <main className="single-post">
                    <img src={singlePostContent.image} alt="Current Post" />
                    <div className="single-post-content" dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(singlePostContent.content) } } />
                    <Back setShowState={setRenderSinglePost} 
                          reset={setSinglePostContent}
                          className="single" 
                          classNamesForToggle={classNamesForToggle} />
                </main>  </> }
export default SinglePost