import { memo } from "react"
import { fetchSelectedPosts } from "../helpers/fetchPost"
import Language from "./Language"
import Selector from "./Selector"
import Back from "./Back"
import "../styles/navbar.css"

const Navbar = props => {
    const { language, 
            setLanguage, 
            renderHome, 
            setRenderHome, 
            setRenderMenu, 
            setRenderAllExceptMenu, 
            setBulkPostContent, 
            currentCategoryId, 
            setCurrentPostData, 
            renderSinglePost, 
            setRenderSinglePost, 
            selectedYearForPosts, 
            setSelectedYearForPosts, 
            setScrollPosition } = props

    const showMenu = () => { 
        setRenderMenu(prevRenderState => !prevRenderState)
        setTimeout( () => setRenderAllExceptMenu(prevRenderState => !prevRenderState), 500) }

    const yearClick = event => {
        setScrollPosition(null)
        setSelectedYearForPosts(event.target.innerText) 
        setBulkPostContent(null)
        fetchSelectedPosts(setBulkPostContent, currentCategoryId, language ? "en" : "ru", false, "", event.target.innerText) }

    const currentYear = new Date().getFullYear()
    const years = new Array(currentYear - 2019).fill("") ; years.forEach( (iteration, index, array) => array[index] = 2020 + index )
    const yearSelector = { 
        label: selectedYearForPosts ? selectedYearForPosts : currentYear, 
        list: years.map( year => ({ 
            content: year, 
            function: yearClick } ) ) }

    return  <>  <header className="navbar-container">
                    <nav className="navbar-content">

                        { !renderHome && !renderSinglePost && 
                        <Back   
                            setShowState={setRenderHome} 
                            className="nav"
                            classNamesForToggle={["all-posts", "hide-right"]} 
                            language={language} 
                            reset={setBulkPostContent} /> }

                        <Language 
                            language={language} 
                            setLanguage={setLanguage} 
                            renderHome={renderHome} 
                            setRenderHome={setRenderHome} 
                            setBulkPostContent={setBulkPostContent} 
                            setCurrentPostData={setCurrentPostData} 
                            setRenderSinglePost={setRenderSinglePost} />

                        { !renderHome && !renderSinglePost && <Selector render={yearSelector} id="year-selector" /> }

                        <ul className="navbar-menu-toggle" onClick={showMenu}><li></li><li></li><li></li></ul>
                    </nav>
                </header>   </> }
export default memo(Navbar)