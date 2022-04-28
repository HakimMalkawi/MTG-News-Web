import DOMPurify from "dompurify"
import Back from "./Back"
import "../styles/single-post.css"

const SinglePost = props => {
    const {currentPostData, setCurrentPostData, setShowPost} = props

    return <>   <main className="single-post">
                    <img src={currentPostData.image} alt="Current Post" />
                    <div className="single-post-content" dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(currentPostData.content) } } />
                    <Back back={setShowPost} className="single" reset={setCurrentPostData} />
                </main>  </> }
export default SinglePost