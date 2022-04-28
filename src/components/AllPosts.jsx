import { useEffect } from "react"
import { fetchPost } from "../helpers/fetchPost"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import { nanoid } from "nanoid"
import Back from "./Back"
import "../styles/all-posts.css"

const AllPosts = props => {
    const {scrollPosition, setScrollPosition, content, setContent, setCurrentPostData, setShowPost, back, language} = props
    useEffect( () => { restoreScrollPosition(scrollPosition) }, [])

    return <>   <main className="all-posts">
                    { content.map((post) => (
                        <div onClick={ () => {
                                saveScrollPosition(setScrollPosition)
                                setShowPost(true)
                                fetchPost(setCurrentPostData, post.id) } } className="post-container" key={nanoid()} >
                            <h1 className="post-title">{post.title}</h1>
                            <img className="post-image" src={post.image} alt="Post"/>
                        </div> ) ) }
                    <Back language={language} back={back} className="all" reset={setContent} />
                </main>  </> }
export default AllPosts