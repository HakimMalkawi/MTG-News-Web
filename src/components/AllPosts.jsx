import { memo, useEffect } from "react"
import { fetchPost, fetchSelectedPosts } from "../helpers/fetchPost"
import { nanoid } from "nanoid"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import InfiniteScroll from "react-infinite-scroll-component"
import Back from "./Back"
import "../styles/all-posts.css"

const AllPosts = props => {
    const { scrollPosition, setScrollPosition, content, setContent, setCurrentPostData, setShowPost, setShowState, currentCategoryId, language } = props
    const classNamesForToggle = ["all-posts", "hide-right"]
    useEffect( () => { restoreScrollPosition(scrollPosition) }, [])

    const handleClick = (id) => {
        saveScrollPosition(setScrollPosition)
        setShowPost(true)
        fetchPost(setCurrentPostData, id)  }

    return <>   <main className="all-posts" id="all-posts">
                    <InfiniteScroll dataLength={content.length} next={() => fetchSelectedPosts(setContent, currentCategoryId, language ? "en" : "ru", false, content)} hasMore={content.length < 40} >
                        { content.map( post =>
                            <div onClick={() => handleClick(post.id)} className="post-container" key={nanoid()} >
                                <h1 className="post-title">{post.title}</h1>
                                <img className="post-image" src={post.image} alt="Post"/>
                            </div> ) }
                            
                        <Back   setShowState={setShowState} 
                                className="all" 
                                classNamesForToggle={classNamesForToggle} 
                                language={language} 
                                reset={setContent} />
                    </InfiniteScroll>
                </main>  </> }
export default memo(AllPosts)