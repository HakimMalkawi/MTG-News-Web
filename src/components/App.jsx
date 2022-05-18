import { useState } from "react"
import { DarkModeConsumer } from "../context/darkModeContext"
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
    let savedPreferences = localStorage.getItem("appState")
    const preferences = JSON.parse(savedPreferences)

    const [renderMenu, setRenderMenu] = useState( savedPreferences ? preferences.renderMenu : false)
    const [renderAllExceptMenu, setRenderAllExceptMenu] = useState( savedPreferences ? preferences.renderAllExceptMenu : true)
    const [renderHome, setRenderHome] = useState( savedPreferences ? preferences.renderHome : true)
    const [currentCategoryId, setCurrentCategoryId] = useState(savedPreferences ? preferences.currentCategoryId : null)
    const [bulkPostContent, setBulkPostContent] = useState( savedPreferences ? preferences.bulkPostContent : null)
    const [selectedYearForPosts, setSelectedYearForPosts] = useState(savedPreferences ? savedPreferences.selectedYearForPosts : undefined)
    const [currentPostData, setCurrentPostData] = useState( savedPreferences ? preferences.currentPostData : null)
    const [renderSinglePost, setRenderSinglePost] = useState( savedPreferences ? preferences.renderSinglePost : false)
    const [language, setLanguage] = useState( savedPreferences ? preferences.language : true)
    const [scrollPosition, setScrollPosition] = useState( savedPreferences ? preferences.scrollPosition : null)

    return  <DarkModeConsumer>
              { ( { darkMode } ) => {
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
                  scrollPosition: scrollPosition } ) )

              return  <div className={`app ${bulkPostContent ? "content" : "home"} ${darkMode ? "dark" : "light"}`}>
                        { renderMenu && 
                            <Menu 
                              setRenderMenu={setRenderMenu}
                              setRenderAllExceptMenu={setRenderAllExceptMenu}
                              setRenderHome={setRenderHome}
                              setBulkPostContent={setBulkPostContent}
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
                                    setScrollPosition={setScrollPosition} /> }

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
                                    setScrollPosition={setScrollPosition} /> }

                              { renderSinglePost && currentPostData &&
                                  <SinglePost 
                                    currentPostData={currentPostData} 
                                    setCurrentPostData={setCurrentPostData}
                                    setRenderSinglePost={setRenderSinglePost} /> } 
                                  
                        { ( !renderHome && !bulkPostContent && <PreLoader /> ) || 
                          ( renderSinglePost && !currentPostData && <PreLoader /> ) }  </> } 
                      </div> } }
            </DarkModeConsumer> }
export default App