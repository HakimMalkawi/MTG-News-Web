import { memo } from "react"
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

    const currentCategory = event => event.target.parentElement.children[1].innerText

    const renderSelectedCategoriesPosts = event => {
        fetchPosts(setBulkPostContent, currentCategory(event), language ? "en" : "ru", setCurrentCategoryId, selectedYearForPosts)
        setScrollPosition(null)
        setRenderHome(false) }

    const categoryElements = postCategories.map( category =>  
        <div onClick={renderSelectedCategoriesPosts} className={`categories-${category.en.toLowerCase()}`} key={nanoid()}>
            <img src={category.img} alt={`View ${category.en}`} className={`categories-${category.en.toLowerCase()}-image`}></img>
            <h1 className={`categories-${category.en.toLowerCase()}-title`}>{language ? category.en : category.ru}</h1>
        </div> )

    return  <> <main className="home-container">
                    <section className="categories-container">
                        {categoryElements}
                    </section>
                </main> </>  }
export default memo(Home)