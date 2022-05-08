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
    const [content, setContent] = useState( preferencesSaved ? preferences.content : null)
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
      currentPostData: currentPostData,
      showPost: showPost,
      language: language,
      darkMode: darkMode,
      scrollPosition: scrollPosition }))

    return <>   <div className={`app ${darkMode ? "dark" : "light"}`}>

                  { toggleMenu && 
                    <Menu 
                      setToggleMenu={setToggleMenu} 
                      renderApp={renderApp} 
                      setRenderApp={setRenderApp} 
                      darkMode={darkMode} 
                      setDarkMode={setDarkMode}
                      language={language} /> }
                  
                  { renderApp &&
                    <>  <Navbar 
                          setToggleMenu={setToggleMenu}
                          setRenderApp={setRenderApp}
                          home={home} 
                          setHome={setHome}
                          language={language} 
                          setLanguage={setLanguage} 
                          setContent={setContent} 
                          setCurrentPostData={setCurrentPostData}
                          setShowPost={setShowPost} />

                        { home && 
                            <Home 
                              setHome={setHome} 
                              setContent={setContent} 
                              setScrollPosition={setScrollPosition}
                              language={language} /> }

                        { content && !showPost && !home && 
                            <AllPosts 
                              content={content} 
                              setContent={setContent}
                              setCurrentPostData={setCurrentPostData} 
                              setShowPost={setShowPost} 
                              language={language}
                              setShowState={setHome}
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