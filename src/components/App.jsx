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
    const [toggleMenu, setToggleMenu] = useState(false)
    const [renderApp, setRenderApp] = useState(true)
    const [home, setHome] = useState(true)
    const [content, setContent] = useState(null)
    const [currentPostData, setCurrentPostData] = useState(null)
    const [showPost, setShowPost] = useState(false)
    const [language, setLanguage] = useState(true)
    const [darkMode, setDarkMode] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(null)

    return <>   <div className={`app ${darkMode ? "dark" : "light"}`}>

                  { toggleMenu && 
                    <Menu setToggleMenu={setToggleMenu} renderApp={renderApp} setRenderApp={setRenderApp} setDarkMode={setDarkMode}/>}
                  
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
                              back={setHome}
                              scrollPosition={scrollPosition} 
                              setScrollPosition={setScrollPosition} />}

                        { showPost && currentPostData &&
                            <SinglePost 
                              currentPostData={currentPostData} 
                              setCurrentPostData={setCurrentPostData}
                              setShowPost={setShowPost} />} 
                            
                  { (!home && !content && <PreLoader />) || (showPost && !currentPostData && <PreLoader />) }  </> } 

                </div> </> }
export default App