import { useState, useContext } from "react"
import { DarkMode } from "../context/darkModeContext"
import Navbar from "./Navbar"
import Menu from "./Menu"
import Language from "./Language"
import Home from "./Home"
import AllPosts from "./AllPosts"
import SinglePost from "./SinglePost"
import PreLoader from "./PreLoader"
import Back from "./Back"
import "../styles/color-scheme.css"
import "../styles/app.css"

const App = () => {
    localStorage.clear()
    let savedPreferences = localStorage.getItem("appState")
    const preferences = JSON.parse(savedPreferences)

    const [renderAllExceptMenu, setRenderAllExceptMenu] = 
      useState( savedPreferences ? preferences.renderAllExceptMenu : true)

    const [renderMenu, setRenderMenu] = 
      useState( savedPreferences ? preferences.renderMenu : false)

    const [renderHome, setRenderHome] = 
      useState( savedPreferences ? preferences.renderHome : true)

    const [bulkPostContent, setBulkPostContent] = 
      useState( savedPreferences ? preferences.bulkPostContent : null)

    const [currentCategoryData, setCurrentCategoryData] = 
      useState(savedPreferences ? preferences.currentCategoryData : null)

    const [lastPostId, setLastPostId] =
      useState(savedPreferences ? savedPreferences.selectedYearForPosts : null)

    const [selectedYearForPosts, setSelectedYearForPosts] = 
      useState(savedPreferences ? savedPreferences.selectedYearForPosts : undefined)

    const [renderSinglePost, setRenderSinglePost] = 
      useState( savedPreferences ? preferences.renderSinglePost : false)

    const [singlePostContent, setSinglePostContent] = 
      useState( savedPreferences ? preferences.singlePostContent : null)

    const [language, setLanguage] = 
      useState( savedPreferences ? preferences.language : true)
      
    const [scrollPosition, setScrollPosition] = 
      useState( savedPreferences ? preferences.scrollPosition : null)

    const { darkMode } = useContext(DarkMode)

    localStorage.setItem("appState", JSON.stringify({
      renderAllExceptMenu: renderAllExceptMenu,
      renderMenu: renderMenu,
      renderHome: renderHome,
      bulkPostContent: bulkPostContent,
      lastPostId: lastPostId,
      selectedYearForPosts: selectedYearForPosts,
      renderSinglePost: renderSinglePost,
      singlePostContent: singlePostContent,
      language: language,
      scrollPosition: scrollPosition,
      darkMode: darkMode }) )

    const refresh = () => {
      if(!renderHome) {
          setRenderHome(true)
          setBulkPostContent(null)
          setSinglePostContent(null)
          setRenderSinglePost(false) } }

    const languageSelector = () => 
      <Language language={language} setLanguage={setLanguage} refresh={refresh} />

    const backFromPosts = className => 
      <Back setShowState={setRenderHome} 
            reset={setBulkPostContent} 
            language={language} 
            className={className} 
            classNamesForToggle={["all-posts", "hide-right"]} />

    return  <div  aria-label="Main Content" 
                  className={`app ${bulkPostContent ? "content" : "home"} ${darkMode ? "dark" : "light"}`}>
              { renderMenu && 
                  <Menu 
                    setRenderAllExceptMenu={setRenderAllExceptMenu}
                    setRenderMenu={setRenderMenu}
                    setRenderHome={setRenderHome}
                    setBulkPostContent={setBulkPostContent}
                    language={language} 
                    setLanguage={setLanguage} 
                    refresh={refresh} /> }
              
              { renderAllExceptMenu &&
                <>  { !renderSinglePost && 
                        <Navbar 
                          setRenderAllExceptMenu={setRenderAllExceptMenu}
                          setRenderMenu={setRenderMenu}
                          renderHome={renderHome} 
                          setBulkPostContent={setBulkPostContent} 
                          currentCategoryData={currentCategoryData}
                          selectedYearForPosts={selectedYearForPosts} 
                          setSelectedYearForPosts={setSelectedYearForPosts}
                          renderSinglePost={renderSinglePost}
                          languageSelector={languageSelector}
                          language={language}
                          backFromPosts={backFromPosts}
                          setScrollPosition={setScrollPosition}  /> }

                    { renderHome && 
                        <Home 
                          setRenderHome={setRenderHome} 
                          setBulkPostContent={setBulkPostContent} 
                          setCurrentCategoryData={setCurrentCategoryData}
                          selectedYearForPosts={selectedYearForPosts}
                          language={language} 
                          setScrollPosition={setScrollPosition} /> }

                    { bulkPostContent && !renderSinglePost && !renderHome && 
                        <AllPosts 
                          bulkPostContent={bulkPostContent} 
                          setBulkPostContent={setBulkPostContent}
                          currentCategoryData={currentCategoryData}
                          selectedYearForPosts={selectedYearForPosts}
                          setRenderSinglePost={setRenderSinglePost} 
                          setSinglePostContent={setSinglePostContent} 
                          language={language}
                          backFromPosts={backFromPosts}
                          scrollPosition={scrollPosition} 
                          setScrollPosition={setScrollPosition} /> }

                    { renderSinglePost && singlePostContent &&
                        <SinglePost 
                          setRenderSinglePost={setRenderSinglePost}
                          singlePostContent={singlePostContent} 
                          setSinglePostContent={setSinglePostContent} /> } 
                        
              { ( !renderHome && !bulkPostContent && <PreLoader /> ) || 
                ( renderSinglePost && !singlePostContent && <PreLoader /> ) }  </> } 
            </div> }
export default App