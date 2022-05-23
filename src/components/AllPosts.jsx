import { useEffect, memo } from "react"
import { fetchPost, fetchSelectedPosts } from "../helpers/fetchPost"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import { nanoid } from "nanoid"
import InfiniteScroll from "react-infinite-scroll-component"
import "../styles/all-posts.css"

const AllPosts = props => {
    const { bulkPostContent, 
            setBulkPostContent,
            currentCategoryId, 
            selectedYearForPosts,
            setRenderSinglePost, 
            setSinglePostContent, 
            language,
            scrollPosition, 
            setScrollPosition } = props

    useEffect( () => restoreScrollPosition(scrollPosition), [] )

    const loadNextContent = () => 
        fetchSelectedPosts( setBulkPostContent, currentCategoryId, language ? "en" : "ru", null, bulkPostContent, selectedYearForPosts )

    const handleClick = (id) => {
        saveScrollPosition(setScrollPosition)
        setRenderSinglePost(true)
        fetchPost(setSinglePostContent, id)  }

    const loadCurrentContent = bulkPostContent.map( post =>
        <div onClick={() => handleClick(post.id)} className="post-container" aria-label="News Article" key={nanoid()} >
            <h1 className="post-title" >{post.title}</h1>
            <p className="post-date" >{post.date}</p>
            <img className="post-image" src={post.image} alt="Post" />
        </div> )

    return  <main className="all-posts" id="all-posts" aria-label="News Articles Page" >
                <InfiniteScroll dataLength={bulkPostContent.length} hasMore={bulkPostContent.length < 40} next={loadNextContent} >
                    { loadCurrentContent }
                </InfiniteScroll>
            </main> }
export default memo(AllPosts)