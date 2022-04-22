import { fetchPosts } from "../helpers/fetchPost"
import announcementsImg from "../resources/announcements.png"
import publicationsImg from "../resources/publications.png"
import eventsImg from "../resources/events.png"
import "../styles/home.css"

const Home = props => {
    const currentCategory = event => event.target.parentElement.children[1].innerText
    const {setHome, setContent, language, setScrollPosition} = props

    const assignCategory = event => {
        setScrollPosition(null)
        setHome(false)
        fetchPosts(setContent, currentCategory(event), language ? "en" : "ru")  }

    return  <> <main className="home-container">
                    <section className="categories-container">
                        <div onClick={assignCategory} 
                             className="categories-announcements">
                        <img src={announcementsImg} alt="View Announcements" className="categories-announcements-image"></img>
                        <h1 className="categories-announcements-title">{language ? "Announcements" : "Анонсы"}</h1>
                        </div>
                        <div onClick={assignCategory} 
                             className="categories-publications">
                        <img src={publicationsImg} alt="View Publications" className="categories-publications-image"></img>
                        <h1 className="categories-publications-title">{language ? "Publications" : "Публикации"}</h1>
                        </div>
                        <div onClick={assignCategory} 
                             className="categories-events">
                        <img src={eventsImg} alt="View Events" className="categories-events-image"></img>
                        <h1 className="categories-events-title">{language ? "Events" : "Мероприятия"}</h1>
                        </div>
                    </section>
                </main> </>  }
export default Home