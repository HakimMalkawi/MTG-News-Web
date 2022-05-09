import { memo, useEffect } from "react"
import { fetchPost } from "../helpers/fetchPost"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import { nanoid } from "nanoid"
import Back from "./Back"
import "../styles/all-posts.css"

const AllPosts = props => {
    const { scrollPosition, setScrollPosition, content, setContent, setCurrentPostData, setShowPost, setShowState, language } = props
    const classNamesForToggle = ["all-posts", "hide-right"]
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
                    <Back setShowState={setShowState} className="all" classNamesForToggle={classNamesForToggle} language={language} reset={setContent} />
                </main>  </> }
export default memo(AllPosts)