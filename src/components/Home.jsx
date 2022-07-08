import { useState, memo } from "react"
import { fetchPosts } from "../helpers/fetchPost"
import { postCategories } from "../data/postCategories"
import { nanoid } from "nanoid"
import search from "../resources/categories/search.png"
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

    const categoryElements = postCategories.map( category => {
        const mediaCategory = category.en === "Media"

        const categoryElement =
            <div onClick={ !mediaCategory && renderSelectedCategoriesPosts} 
                className={`category-container category-${category.en.toLowerCase()}`} 
                aria-label={`${category.en} Category`} 
                key={nanoid()} >
                <img src={category.img} alt={`View ${category.en}`} className={`category-${category.en.toLowerCase()}-image`} />
                <h1 className={`category-${category.en.toLowerCase()}-title`} > {language ? category.en : category.ru} </h1>
            </div> 
        
        return mediaCategory ? 
            <a className="category-media-link" href={ language ? category.linkEn : category.linkRu }>
                { categoryElement }
            </a> : 
            categoryElement } )

    const [ searchValue, setSearchValue ] = useState(null)

    const submitSearchQuery = () => {
        setSearchValue("")
    }

    const trackSearchInState = event => setSearchValue(event.target.value)


    return  <main className="home-container" aria-label="Home Screen" >
                <div className="home-search-container" >
                    <input  value={searchValue} 
                            onChange={trackSearchInState} 
                            className="home-search-element" 
                            placeholder="Search for a post" type="text" 
                            onKeyPress={ event => event.key === "Enter" && submitSearchQuery() } />
                    <img onClick={submitSearchQuery} className="home-search-icon" src={search} alt="Search" />
                </div>
                <h2 className="home-title" >Check out our latest news:</h2>
                <section className="categories-container" aria-label="News Categories" > 
                    {categoryElements} 
                </section>
            </main> }
export default memo(Home)