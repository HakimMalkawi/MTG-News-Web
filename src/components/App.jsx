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

    const [renderAllExceptMenu, setRenderAllExceptMenu] = useState( savedPreferences ? preferences.renderAllExceptMenu : true)
    const [renderMenu, setRenderMenu] = useState( savedPreferences ? preferences.renderMenu : false)
    const [renderHome, setRenderHome] = useState( savedPreferences ? preferences.renderHome : true)
    const [bulkPostContent, setBulkPostContent] = useState( savedPreferences ? preferences.bulkPostContent : null)
    const [currentCategoryId, setCurrentCategoryId] = useState(savedPreferences ? preferences.currentCategoryId : null)
    const [selectedYearForPosts, setSelectedYearForPosts] = useState(savedPreferences ? savedPreferences.selectedYearForPosts : undefined)
    const [renderSinglePost, setRenderSinglePost] = useState( savedPreferences ? preferences.renderSinglePost : false)
    const [singlePostContent, setSinglePostContent] = useState( savedPreferences ? preferences.singlePostContent : null)
    const [language, setLanguage] = useState( savedPreferences ? preferences.language : true)
    const [scrollPosition, setScrollPosition] = useState( savedPreferences ? preferences.scrollPosition : null)

    return  <DarkModeConsumer>
              { ( { darkMode } ) => {
                localStorage.setItem("appState", JSON.stringify({
                  renderAllExceptMenu: renderAllExceptMenu,
                  renderMenu: renderMenu,
                  renderHome: renderHome,
                  bulkPostContent: bulkPostContent,
                  selectedYearForPosts: selectedYearForPosts,
                  renderSinglePost: renderSinglePost,
                  singlePostContent: singlePostContent,
                  language: language,
                  scrollPosition: scrollPosition,
                  darkMode: darkMode }) )

              return  <div aria-label="Main Content" className={`app ${bulkPostContent ? "content" : "home"} ${darkMode ? "dark" : "light"}`}>
                        { renderMenu && 
                            <Menu 
                              setRenderAllExceptMenu={setRenderAllExceptMenu}
                              setRenderMenu={setRenderMenu}
                              setRenderHome={setRenderHome}
                              setBulkPostContent={setBulkPostContent}
                              language={language} /> }
                        
                        { renderAllExceptMenu &&
                          <>  { !renderSinglePost && 
                                  <Navbar 
                                    setRenderAllExceptMenu={setRenderAllExceptMenu}
                                    setRenderMenu={setRenderMenu}
                                    renderHome={renderHome} 
                                    setRenderHome={setRenderHome}
                                    setBulkPostContent={setBulkPostContent} 
                                    currentCategoryId={currentCategoryId}
                                    selectedYearForPosts={selectedYearForPosts} 
                                    setSelectedYearForPosts={setSelectedYearForPosts}
                                    renderSinglePost={renderSinglePost}
                                    setRenderSinglePost={setRenderSinglePost}
                                    setSinglePostContent={setSinglePostContent}
                                    language={language} 
                                    setLanguage={setLanguage}
                                    setScrollPosition={setScrollPosition}  /> }

                              { renderHome && 
                                  <Home 
                                    setRenderHome={setRenderHome} 
                                    setBulkPostContent={setBulkPostContent} 
                                    setCurrentCategoryId={setCurrentCategoryId}
                                    selectedYearForPosts={selectedYearForPosts}
                                    language={language} 
                                    setScrollPosition={setScrollPosition} /> }

                              { bulkPostContent && !renderSinglePost && !renderHome && 
                                  <AllPosts 
                                    bulkPostContent={bulkPostContent} 
                                    setBulkPostContent={setBulkPostContent}
                                    currentCategoryId={currentCategoryId}
                                    selectedYearForPosts={selectedYearForPosts}
                                    setRenderSinglePost={setRenderSinglePost} 
                                    setSinglePostContent={setSinglePostContent} 
                                    language={language}
                                    scrollPosition={scrollPosition} 
                                    setScrollPosition={setScrollPosition} /> }

                              { renderSinglePost && singlePostContent &&
                                  <SinglePost 
                                    setRenderSinglePost={setRenderSinglePost}
                                    singlePostContent={singlePostContent} 
                                    setSinglePostContent={setSinglePostContent} /> } 
                                  
                        { ( !renderHome && !bulkPostContent && <PreLoader /> ) || 
                          ( renderSinglePost && !singlePostContent && <PreLoader /> ) }  </> } 
                      </div> } }
            </DarkModeConsumer> }
export default App