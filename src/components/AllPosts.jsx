import { memo, useEffect } from "react"
import { fetchPost, fetchSelectedPosts } from "../helpers/fetchPost"
import { nanoid } from "nanoid"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
import InfiniteScroll from "react-infinite-scroll-component"
import "../styles/all-posts.css"

const AllPosts = props => {
    const { scrollPosition, setScrollPosition, bulkPostContent, setBulkPostContent, setCurrentPostData, setRenderSinglePost, currentCategoryId, selectedYearForPosts, language } = props

    useEffect( () => { restoreScrollPosition(scrollPosition) }, [])
        
    const handleClick = (id) => {
        saveScrollPosition(setScrollPosition)
        setRenderSinglePost(true)
        fetchPost(setCurrentPostData, id)  }

    return <>   <main className="all-posts" id="all-posts">
                    <InfiniteScroll 
                        dataLength={bulkPostContent.length} 
                        next={() => fetchSelectedPosts(setBulkPostContent, currentCategoryId, language ? "en" : "ru", false, bulkPostContent, selectedYearForPosts)} 
                        hasMore={bulkPostContent.length < 40} >
                        { bulkPostContent.map( post =>
                            <div onClick={() => handleClick(post.id)} className="post-container" key={nanoid()} >
                                <h1 className="post-title">{post.title}</h1>
                                <p className="post-date">{post.date}</p>
                                <img className="post-image" src={post.image} alt="Post"/>
                            </div> ) }
                    </InfiniteScroll>
                </main>  </> }
export default memo(AllPosts)