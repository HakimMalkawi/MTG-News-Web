import { memo } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import Language from "./Language"
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
            setRenderSinglePost,
            setSinglePostContent, 
            language, 
            setLanguage, 
            setScrollPosition } = props

    const showMenu = () => { 
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

                        <Language 
                            renderHome={renderHome} 
                            setRenderHome={setRenderHome} 
                            setBulkPostContent={setBulkPostContent} 
                            setRenderSinglePost={setRenderSinglePost} 
                            setSinglePostContent={setSinglePostContent} 
                            language={language} 
                            setLanguage={setLanguage} />

                        { !renderHome && !renderSinglePost && <Selector render={yearSelector} id="year-selector" /> }

                        <ul aria-label="Toggle Menu" className="navbar-menu-toggle" onClick={showMenu}><li></li><li></li><li></li></ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)