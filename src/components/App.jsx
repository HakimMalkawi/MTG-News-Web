import { useState } from "react"
import Navbar from "./Navbar"
import Menu from "./Menu"
import Home from "./Home"
import AllPosts from "./AllPosts"
import SinglePost from "./SinglePost"
import PreLoader from "./PreLoader"
import "../styles/color-scheme.css"
import "../styles/app.css"

const App = () => {
    localStorage.clear()
    let preferencesSaved = false ; localStorage.getItem("appState") ? preferencesSaved = true : preferencesSaved = false
    const preferences = JSON.parse(localStorage.getItem("appState"))

    const [renderMenu, setRenderMenu] = useState( preferencesSaved ? preferences.renderMenu : false)
    const [renderAllExceptMenu, setRenderAllExceptMenu] = useState( preferencesSaved ? preferences.renderAllExceptMenu : true)
    const [renderHome, setRenderHome] = useState( preferencesSaved ? preferences.renderHome : true)
    const [currentCategoryId, setCurrentCategoryId] = useState(preferencesSaved ? preferences.currentCategoryId : null)
    const [bulkPostContent, setBulkPostContent] = useState( preferencesSaved ? preferences.bulkPostContent : null)
    const [selectedYearForPosts, setSelectedYearForPosts] = useState(preferencesSaved ? preferencesSaved.selectedYearForPosts : undefined)
    const [currentPostData, setCurrentPostData] = useState( preferencesSaved ? preferences.currentPostData : null)
    const [renderSinglePost, setRenderSinglePost] = useState( preferencesSaved ? preferences.renderSinglePost : false)
    const [language, setLanguage] = useState( preferencesSaved ? preferences.language : true)
    const [darkMode, setDarkMode] = useState( preferencesSaved ? preferences.darkMode : true)
    const [scrollPosition, setScrollPosition] = useState( preferencesSaved ? preferences.scrollPosition : null)

    localStorage.setItem("appState", JSON.stringify({
      renderMenu: renderMenu,
      renderAllExceptMenu: renderAllExceptMenu,
      renderHome: renderHome,
      bulkPostContent: bulkPostContent,
      selectedYearForPosts: selectedYearForPosts,
      currentPostData: currentPostData,
      renderSinglePost: renderSinglePost,
      language: language,
      darkMode: darkMode,
      scrollPosition: scrollPosition }))

    return <>   <div className={`app ${bulkPostContent ? "content" : "home"} ${darkMode ? "dark" : "light"}`}>

                  { renderMenu && 
                    <Menu 
                      setRenderMenu={setRenderMenu}
                      setRenderAllExceptMenu={setRenderAllExceptMenu}
                      setRenderHome={setRenderHome}
                      setBulkPostContent={setBulkPostContent}
                      darkMode={darkMode} 
                      setDarkMode={setDarkMode}
                      language={language} /> }
                  
                  { renderAllExceptMenu &&
                    <>  { !renderSinglePost && 
                            <Navbar 
                              setRenderMenu={setRenderMenu}
                              setRenderAllExceptMenu={setRenderAllExceptMenu}
                              renderHome={renderHome} 
                              setRenderHome={setRenderHome}
                              language={language} 
                              setLanguage={setLanguage} 
                              setBulkPostContent={setBulkPostContent} 
                              currentCategoryId={currentCategoryId}
                              setCurrentPostData={setCurrentPostData}
                              renderSinglePost={renderSinglePost}
                              setRenderSinglePost={setRenderSinglePost}
                              selectedYearForPosts={selectedYearForPosts} 
                              setSelectedYearForPosts={setSelectedYearForPosts}
                              setScrollPosition={setScrollPosition}
                              darkMode={darkMode} /> }

                        { renderHome && 
                            <Home 
                              setRenderHome={setRenderHome} 
                              setBulkPostContent={setBulkPostContent} 
                              setCurrentCategoryId={setCurrentCategoryId}
                              setScrollPosition={setScrollPosition}
                              selectedYearForPosts={selectedYearForPosts}
                              language={language} /> }

                        { bulkPostContent && !renderSinglePost && !renderHome && 
                            <AllPosts 
                              bulkPostContent={bulkPostContent} 
                              setBulkPostContent={setBulkPostContent}
                              setCurrentPostData={setCurrentPostData} 
                              currentCategoryId={currentCategoryId}
                              selectedYearForPosts={selectedYearForPosts}
                              setRenderSinglePost={setRenderSinglePost} 
                              language={language}
                              scrollPosition={scrollPosition} 
                              setScrollPosition={setScrollPosition} />}

                        { renderSinglePost && currentPostData &&
                            <SinglePost 
                              currentPostData={currentPostData} 
                              setCurrentPostData={setCurrentPostData}
                              setRenderSinglePost={setRenderSinglePost} />} 
                            
                  { (!renderHome && !bulkPostContent && <PreLoader dark={darkMode} />) || (renderSinglePost && !currentPostData && <PreLoader dark={darkMode} />) }  </> } 

                </div> </> }
export default App