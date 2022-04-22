import { useEffect } from "react"
import { nanoid } from "nanoid"
import { fetchPost } from "../helpers/fetchPost"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import Back from "./Back"
import "../styles/all-posts.css"

const AllPosts = props => {
    const {content, setShowPost, setCurrentPostData, back, scrollPosition, setScrollPosition, setContent, language} = props
    useEffect(()=>{restoreScrollPosition(scrollPosition)}, [])

    return <>   <main className="all-posts">
                    { content.map((post) => (
                    <div onClick={ () => {
                            saveScrollPosition(setScrollPosition)
                            setShowPost(true)
                            fetchPost(setCurrentPostData, post.id) } } className="post-container" key={nanoid()} >
                        <h1 className="post-title">{post.title}</h1>
                        <img className="post-image" src={post.image} alt="Post"/>
                    </div> ) ) }
                    <Back language={language} back={back} class="all" reset={setContent} />
                </main>  </> }
export default AllPosts