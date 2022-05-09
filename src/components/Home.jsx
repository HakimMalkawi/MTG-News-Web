import { memo } from "react"
import { fetchPosts } from "../helpers/fetchPost"
import { postCategories } from "../data/postCategories"
import { nanoid } from "nanoid"
import "../styles/home.css"

const Home = props => {
    const {setHome, setContent, language, setScrollPosition, setCurrentCategoryId} = props

    const currentCategory = event => event.target.parentElement.children[1].innerText

    const renderSelectedCategoriesPosts = event => {
        fetchPosts(setContent, currentCategory(event), language ? "en" : "ru", setCurrentCategoryId)
        setScrollPosition(null)
        setHome(false) }

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