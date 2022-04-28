import { fetchPosts } from "../helpers/fetchPost"
import { categories } from "../data/categories"
import { nanoid } from "nanoid"
import "../styles/home.css"

const Home = props => {
    const {setHome, setContent, language, setScrollPosition} = props

    const currentCategory = event => event.target.parentElement.children[1].innerText

    const assignCategory = event => {
        fetchPosts(setContent, currentCategory(event), language ? "en" : "ru")
        setScrollPosition(null)
        setHome(false) }

    const categoryElements = categories.map( category =>  
        <div onClick={assignCategory} className={`categories-${category.en.toLowerCase()}`} key={nanoid()}>
            <img src={category.img} alt={`View ${category.en}`} className={`categories-${category.en.toLowerCase()}-image`}></img>
            <h1 className={`categories-${category.en.toLowerCase()}-title`}>{language ? category.en : category.ru}</h1>
        </div> )

    return  <> <main className="home-container">
                    <section className="categories-container">
                        {categoryElements}
                    </section>
                </main> </>  }
export default Home