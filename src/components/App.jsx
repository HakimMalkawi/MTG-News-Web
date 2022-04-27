import React, { useState } from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import AllPosts from "./AllPosts"
import SinglePost from "./SinglePost"
import PreLoader from "./PreLoader"
import "../styles/app.css"

const App = () => {
  const [language, setLanguage] = useState(true)
  const [home, setHome] = useState(true)
  const [content, setContent] = useState(null)
  const [showPost, setShowPost] = useState(false)
  const [currentPostData, setCurrentPostData] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(null)

  return <>   <Navbar 
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
export default App