import { memo, useEffect } from "react"
import { fetchPost, fetchSelectedPosts } from "../helpers/fetchPost"
import { nanoid } from "nanoid"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import InfiniteScroll from "react-infinite-scroll-component"
import "../styles/all-posts.css"

const AllPosts = props => {
    const { scrollPosition, setScrollPosition, content, setContent, setCurrentPostData, setShowPost, currentCategoryId, language } = props

    useEffect( () => { 
        document.querySelector(".language-container").classList.add("slide-over-right")
        document.querySelector(".nav").classList.add("fade-in")
        restoreScrollPosition(scrollPosition) 
        return () => {
            if (document.querySelector(".nav")) document.querySelector(".nav").classList.remove("fade-in")
            document.querySelector(".language-container").classList.remove("slide-over-right") } }, [])
        
    const handleClick = (id) => {
        saveScrollPosition(setScrollPosition)
        setShowPost(true)
        fetchPost(setCurrentPostData, id)  }

    return <>   <main className="all-posts" id="all-posts">
                    <InfiniteScroll dataLength={content.length} next={() => fetchSelectedPosts(setContent, currentCategoryId, language ? "en" : "ru", false, content)} hasMore={content.length < 40} >
                        { content.map( post =>
                            <div onClick={() => handleClick(post.id)} className="post-container" key={nanoid()} >
                                <h1 className="post-title">{post.title}</h1>
                                <p className="post-date">{post.date}</p>
                                <img className="post-image" src={post.image} alt="Post"/>
                            </div> ) }
                    </InfiniteScroll>
                </main>  </> }
export default memo(AllPosts)