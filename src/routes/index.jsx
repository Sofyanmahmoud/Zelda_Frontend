import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from '../components'   
import {About,Admin,Blog,BlogPage} from '../pages'
import { getPosts, stringToUrl } from '../util'
import background from"../assets/background.jpg"
import './index.css'

import './index.css'

const Index = () => {

const [posts,setPosts]=useState([])
const [selectedPost,setSelectedPost]=useState({})

const getPostByTitle= (urlTitle)=>{
  const TempPost=posts.find(post=>stringToUrl(post.title)===urlTitle)
    setSelectedPost(TempPost);
}

useEffect(()=>{
  getPosts()
  .then(data=>{
    setPosts(data)
  })
  .catch(error=>{
    console.log("Error fetching post",error)
  })
},[])
  return (
    <div className='app-container'>
      <BrowserRouter>
      <img src={background} alt="Link and the Great Deku Tree" className='background-Image' />
        <div className='Route-box'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Blog posts={posts} setSelectedPost={setSelectedPost} />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog/:postTitle" element={<BlogPage post ={selectedPost} posts={posts} setSelectedPost={setSelectedPost} loadPost={getPostByTitle}/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Index

