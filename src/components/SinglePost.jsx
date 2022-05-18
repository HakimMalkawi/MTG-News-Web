import DOMPurify from "dompurify"
import Back from "./Back"
import "../styles/single-post.css"

const SinglePost = props => {
    const { currentPostData, setCurrentPostData, setRenderSinglePost } = props
    const classNamesForToggle = ["single-post", "hide-right"]

    return <>   <main className="single-post">
                    <img src={currentPostData.image} alt="Current Post" />
                    <div className="single-post-content" dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(currentPostData.content) } } />
                    <Back setShowState={setRenderSinglePost} className="single" classNamesForToggle={classNamesForToggle} reset={setCurrentPostData} />
                </main>  </> }
export default SinglePost