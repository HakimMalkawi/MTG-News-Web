import React, { useState } from "react"
import Menu from "./Menu"
import Navbar from "./Navbar"
import Home from "./Home"
import AllPosts from "./AllPosts"
import SinglePost from "./SinglePost"
import PreLoader from "./PreLoader"
import "../styles/app.css"
import "../styles/color-scheme.css"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [hideLayout, setHideLayout] = useState(false)
  const [language, setLanguage] = useState(true)
  const [home, setHome] = useState(true)
  const [content, setContent] = useState(null)
  const [showPost, setShowPost] = useState(false)
  const [currentPostData, setCurrentPostData] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(null)

  return <>   <div className={darkMode ? "app dark" : "app light"}>
  
              { toggleMenu && <Menu setToggleMenu={setToggleMenu} setHideLayout={setHideLayout} setDarkMode={setDarkMode}/>}
              
              { !hideLayout &&
              <>  <Navbar 
                    setHideLayout={setHideLayout}
                    setToggleMenu={setToggleMenu}
                    language={language} 
                    setLanguage={setLanguage} 
                    home={home} 
                    setShowPost={setShowPost}
                    setHome={setHome} 
                    setContent={setContent} 
                    setCurrentPostData={setCurrentPostData}/>

                  { home && 
                    <Home 
                      setScrollPosition={setScrollPosition}
                      setHome={setHome} 
                      setContent={setContent} 
                      language={language}/> }

                  { content && !showPost && !home && 
                    <AllPosts 
                      setShowPost={setShowPost} 
                      setCurrentPostData={setCurrentPostData} 
                      language={language}
                      content={content} 
                      back={setHome}
                      scrollPosition={scrollPosition} 
                      setScrollPosition={setScrollPosition} 
                      setContent={setContent} />}

                  { showPost && currentPostData &&
                    <SinglePost 
                      currentPostData={currentPostData} 
                      setCurrentPostData={setCurrentPostData}
                      setShowPost={setShowPost} />} 
                      
                  { (!home && !content && <PreLoader />) || (showPost && !currentPostData && <PreLoader />) }  </> } 

                  </div> </> }
export default App