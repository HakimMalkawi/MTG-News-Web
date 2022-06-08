import { useRef, memo } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import Selector from "./Selector"
import "../styles/navbar.css"

const Navbar = props => {
    const { setRenderAllExceptMenu, 
            setRenderMenu, 
            renderHome, 
            setBulkPostContent, 
            currentCategoryData, 
            selectedYearForPosts, 
            setSelectedYearForPosts, 
            renderSinglePost, 
            languageSelector,
            language, 
            backFromPosts,
            setScrollPosition } = props

    const menuToggle = useRef(null)

    const showMenu = () => { 
        menuToggle.current.classList.add("spin")
        setRenderMenu(prevRenderState => !prevRenderState)
        setTimeout( () => setRenderAllExceptMenu(prevRenderState => !prevRenderState), 500) }

    const selectYear = event => {
        setScrollPosition(null)
        setSelectedYearForPosts(event.target.innerText) 
        setBulkPostContent(null)
        fetchSelectedPosts(setBulkPostContent, currentCategoryData, language ? "en" : "ru", null, "", event.target.innerText) }

    const currentYear = new Date().getFullYear()
    const years = new Array(currentYear - 2019).fill("") ; years.forEach( (iteration, index, currentArray) => currentArray[index] = 2020 + index )

    const yearSelector = {  label: selectedYearForPosts ? selectedYearForPosts : currentYear,
                            list: years.map( year => ({ content: year, 
                                                        function: selectYear } ) ) }

    return  <>  <header className="navbar-container" aria-label="Navbar" >
                    <nav className="navbar-content" aria-label="Navbar Content" >

                        { !renderHome && !renderSinglePost && backFromPosts("nav") }
                        
                        { renderHome && languageSelector() }

                        { !renderHome && !renderSinglePost && <Selector render={yearSelector} /> }

                        <ul onClick={showMenu} ref={menuToggle} className="navbar-menu-toggle" aria-label="Toggle Menu" >
                            <li></li><li></li><li></li>
                        </ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)