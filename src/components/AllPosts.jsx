import { memo, useEffect } from "react"
import { fetchPost, fetchSelectedPosts } from "../helpers/fetchPost"
import { nanoid } from "nanoid"
import { saveScrollPosition, restoreScrollPosition } from "../helpers/scrollTracker.js"
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

    useEffect( () => { restoreScrollPosition(scrollPosition) }, [])
        
    const handleClick = (id) => {
        saveScrollPosition(setScrollPosition)
        setRenderSinglePost(true)
        fetchPost(setSinglePostContent, id)  }

    return <>   <main className="all-posts" id="all-posts">
                    <InfiniteScroll  
                        next={() => fetchSelectedPosts(setBulkPostContent, currentCategoryId, language ? "en" : "ru", null, bulkPostContent, selectedYearForPosts)} 
                        hasMore={bulkPostContent.length < 40} 
                        dataLength={bulkPostContent.length} >
                        { bulkPostContent.map( post =>
                            <div onClick={() => handleClick(post.id)} className="post-container" key={nanoid()} >
                                <h1 className="post-title">{post.title}</h1>
                                <p className="post-date">{post.date}</p>
                                <img className="post-image" src={post.image} alt="Post"/>
                            </div> ) }
                    </InfiniteScroll>
                </main>  </> }
export default memo(AllPosts)