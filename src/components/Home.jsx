import { memo } from "react"
import { fetchPosts } from "../helpers/fetchPost"
import { postCategories } from "../data/postCategories"
import { nanoid } from "nanoid"
import "../styles/home.css"

const Home = props => {
    const { setRenderHome, 
            setBulkPostContent, 
            setCurrentCategoryData, 
            selectedYearForPosts,
            language, 
            setScrollPosition } = props

    const currentCategoryName = event => event.target.parentElement.children[1].innerText

    const renderSelectedCategoriesPosts = event => {
        fetchPosts(setBulkPostContent, currentCategoryName(event), language ? "en" : "ru", setCurrentCategoryData, selectedYearForPosts)
        setScrollPosition(null)
        setRenderHome(false) }

    const categoryElements = postCategories.map( category =>  
        <div onClick={renderSelectedCategoriesPosts} 
             className={`categories-${category.en.toLowerCase()}`} 
             aria-label={`${category.en} Category`} 
             key={nanoid()} >
            <img src={category.img} alt={`View ${category.en}`} className={`categories-${category.en.toLowerCase()}-image`} />
            <h1 className={`categories-${category.en.toLowerCase()}-title`} > {language ? category.en : category.ru} </h1>
        </div> )

    return  <main className="home-container" aria-label="Home Screen" >
                <section className="categories-container" aria-label="News Categories" > {categoryElements} </section>
            </main> }
export default memo(Home)