import { useRef, useContext, memo } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import { DarkMode } from "../context/darkModeContext"
import Selector from "./Selector"
import mtgDark from "../resources/navigation/mtg-dark.png"
import mtgLight from "../resources/navigation/mtg-light.png"
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


    const handleInvalidYearSelection = () => setSelectedYearForPosts( new Date().getFullYear() )


    const selectYear = event => {
        setScrollPosition(null)
        setSelectedYearForPosts(event.target.innerText) 
        setBulkPostContent(null)
        fetchSelectedPosts( setBulkPostContent, currentCategoryData, language ? "en" : "ru", null, "", event.target.innerText, handleInvalidYearSelection ) }

        
    const currentYear = new Date().getFullYear()
    const years = new Array(currentYear - 2019).fill("") ; years.forEach( (iteration, index, currentArray) => currentArray[index] = 2020 + index )

    const yearSelector = {  label: selectedYearForPosts ? selectedYearForPosts : currentYear,
                            list: years.map( year => ({ content: year, 
                                                        function: selectYear } ) ).reverse() }

    const { darkMode } = useContext(DarkMode)

    return  <>  <header className="navbar-container" aria-label="Navbar" >
                    <nav className="navbar-content" aria-label="Navbar Content" >

                        { !renderHome && !renderSinglePost && backFromPosts("nav") }
                        
                        { renderHome && 
                            <>  <img className="navbar-logo" src={ darkMode ? mtgDark : mtgLight } alt="M. Target Group" />
                                { languageSelector() }  </> }

                        { !renderHome && !renderSinglePost && <Selector render={yearSelector} /> }

                        <ul onClick={showMenu} ref={menuToggle} className="navbar-menu-toggle" aria-label="Toggle Menu" >
                            <li></li><li></li><li></li>
                        </ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)