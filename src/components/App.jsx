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
    let preferencesSaved = false ; localStorage.getItem("appState") ? preferencesSaved = true : preferencesSaved = false
    const preferences = JSON.parse(localStorage.getItem("appState"))

    const [toggleMenu, setToggleMenu] = useState( preferencesSaved ? preferences.toggleMenu : false)
    const [renderApp, setRenderApp] = useState( preferencesSaved ? preferences.renderApp : true)
    const [home, setHome] = useState( preferencesSaved ? preferences.home : true)
    const [currentCategoryId, setCurrentCategoryId] = useState(preferencesSaved ? preferences.currentCategoryId : null)
    const [content, setContent] = useState( preferencesSaved ? preferences.content : null)
    const [selectedYear, setSelectedYear] = useState(preferencesSaved ? preferencesSaved.selectedYear : null)
    const [currentPostData, setCurrentPostData] = useState( preferencesSaved ? preferences.currentPostData : null)
    const [showPost, setShowPost] = useState( preferencesSaved ? preferences.showPost : false)
    const [language, setLanguage] = useState( preferencesSaved ? preferences.language : true)
    const [darkMode, setDarkMode] = useState( preferencesSaved ? preferences.darkMode : true)
    const [scrollPosition, setScrollPosition] = useState( preferencesSaved ? preferences.scrollPosition : null)

    localStorage.setItem("appState", JSON.stringify({
      toggleMenu: toggleMenu,
      renderApp: renderApp,
      home: home,
      content: content,
      selectedYear: selectedYear,
      currentPostData: currentPostData,
      showPost: showPost,
      language: language,
      darkMode: darkMode,
      scrollPosition: scrollPosition }))

    return <>   <div className={`app ${content ? "" : "home"} ${darkMode ? "dark" : "light"}`}>

                  { toggleMenu && 
                    <Menu 
                      setToggleMenu={setToggleMenu} 
                      renderApp={renderApp} 
                      setRenderApp={setRenderApp}
                      setHome={setHome}
                      setContent={setContent}
                      darkMode={darkMode} 
                      setDarkMode={setDarkMode}
                      language={language} /> }
                  
                  { renderApp &&
                    <>  { !showPost && 
                            <Navbar 
                              setToggleMenu={setToggleMenu}
                              setRenderApp={setRenderApp}
                              home={home} 
                              setHome={setHome}
                              language={language} 
                              setLanguage={setLanguage} 
                              content={content}
                              setContent={setContent} 
                              currentCategoryId={currentCategoryId}
                              setCurrentPostData={setCurrentPostData}
                              showPost={showPost}
                              setShowPost={setShowPost}
                              selectedYear={selectedYear} 
                              setSelectedYear={setSelectedYear}
                              darkMode={darkMode} /> }

                        { home && 
                            <Home 
                              setHome={setHome} 
                              setContent={setContent} 
                              setCurrentCategoryId={setCurrentCategoryId}
                              setScrollPosition={setScrollPosition}
                              language={language} /> }

                        { content && !showPost && !home && 
                            <AllPosts 
                              content={content} 
                              setContent={setContent}
                              setCurrentPostData={setCurrentPostData} 
                              currentCategoryId={currentCategoryId}
                              selectedYear={selectedYear}
                              setShowPost={setShowPost} 
                              language={language}
                              scrollPosition={scrollPosition} 
                              setScrollPosition={setScrollPosition} />}

                        { showPost && currentPostData &&
                            <SinglePost 
                              currentPostData={currentPostData} 
                              setCurrentPostData={setCurrentPostData}
                              setShowPost={setShowPost} />} 
                            
                  { (!home && !content && <PreLoader dark={darkMode} />) || (showPost && !currentPostData && <PreLoader dark={darkMode} />) }  </> } 

                </div> </> }
export default App