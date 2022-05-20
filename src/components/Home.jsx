import { memo, useEffect } from "react"
import { fetchPosts } from "../helpers/fetchPost"
import { postCategories } from "../data/postCategories"
import { nanoid } from "nanoid"
import "../styles/home.css"

const Home = props => {
    const { setRenderHome, 
            setBulkPostContent, 
            setCurrentCategoryId, 
            selectedYearForPosts,
            language, 
            setScrollPosition } = props

    // useEffect( () => {
    //     if ( document.querySelector(".navbar-menu-toggle").classList.contains("spin") ) document.querySelector(".navbar-menu-toggle").classList.remove("spin") }, [])

    const currentCategory = event => event.target.parentElement.children[1].innerText

    const renderSelectedCategoriesPosts = event => {
        fetchPosts(setBulkPostContent, currentCategory(event), language ? "en" : "ru", setCurrentCategoryId, selectedYearForPosts)
        setScrollPosition(null)
        setRenderHome(false) }

    const categoryElements = postCategories.map( category =>  
        <div onClick={renderSelectedCategoriesPosts} 
             aria-label={`${category.en} Category`} 
             className={`categories-${category.en.toLowerCase()}`} 
             key={nanoid()} >
            <img src={category.img} alt={`View ${category.en}`} className={`categories-${category.en.toLowerCase()}-image`}></img>
            <h1 className={`categories-${category.en.toLowerCase()}-title`}>{language ? category.en : category.ru}</h1>
        </div> )

    return  <> <main aria-label="Home Screen" className="home-container">
                    <section aria-label="News Categories" className="categories-container">
                        {categoryElements}
                    </section>
                </main> </>  }
export default memo(Home)