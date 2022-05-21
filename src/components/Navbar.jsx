import { memo, useRef } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import Selector from "./Selector"
import Back from "./Back"
import "../styles/navbar.css"

const Navbar = props => {
    const { setRenderAllExceptMenu, 
            setRenderMenu, 
            renderHome, 
            setRenderHome, 
            setBulkPostContent, 
            currentCategoryId, 
            selectedYearForPosts, 
            setSelectedYearForPosts, 
            renderSinglePost, 
            languageSelector,
            language, 
            setScrollPosition } = props

    const menuToggle = useRef(null)

    const showMenu = () => { 
        menuToggle.current.classList.add("spin")
        setRenderMenu(prevRenderState => !prevRenderState)
        setTimeout( () => setRenderAllExceptMenu(prevRenderState => !prevRenderState), 500) }

    const yearClick = event => {
        setScrollPosition(null)
        setSelectedYearForPosts(event.target.innerText) 
        setBulkPostContent(null)
        fetchSelectedPosts(setBulkPostContent, currentCategoryId, language ? "en" : "ru", null, "", event.target.innerText) }

    const currentYear = new Date().getFullYear()
    const years = new Array(currentYear - 2019).fill("") ; years.forEach( (iteration, index, currentArray) => currentArray[index] = 2020 + index )
    const yearSelector = { 
        label: selectedYearForPosts ? selectedYearForPosts : currentYear,
        list: years.map( year => ({ 
            content: year, 
            function: yearClick } ) ) }

    return  <>  <header aria-label="Navbar" className="navbar-container">
                    <nav aria-label="Navbar Content" className="navbar-content">

                        { !renderHome && !renderSinglePost && 
                        <Back   
                            setShowState={setRenderHome} 
                            reset={setBulkPostContent}
                            language={language} 
                            className="nav"
                            classNamesForToggle={["all-posts", "hide-right"]} /> }
                        
                        { renderHome && languageSelector() }

                        { !renderHome && !renderSinglePost && <Selector render={yearSelector} id="year-selector" /> }

                        <ul ref={menuToggle} aria-label="Toggle Menu" className="navbar-menu-toggle" onClick={showMenu}><li></li><li></li><li></li></ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)