import React, { useEffect } from 'react'
import './BlogPage.css'
import {getImageUrl, IsEmptyObject, scrollToTop, stringToUrl} from "../util.js"
import { useParams, Link, useNavigate } from 'react-router-dom' 
import {leftArrow,RightArrow}from"../assets"

const BlogPage = ({post, posts, setSelectedPost, loadPost}) => {
  const {postTitle} = useParams();
  const navigate = useNavigate(); 
  
  useEffect(() => {
    loadPost(postTitle);
  }, [postTitle, loadPost]);

  if (!post || IsEmptyObject(post) || !post.title) {
    return <>404 article not found</>;
  }

  const currentIndex = posts.findIndex(currentPost => currentPost._id === post._id);
  if (currentIndex === -1) {
    return <>404 article not found</>;
  }

  const totalPosts = posts.length;
  const nextIndex = (currentIndex + 1) % totalPosts;
  const previousIndex = (currentIndex - 1 + totalPosts) % totalPosts;

  const nextPost = posts[nextIndex];
  const prevPost = posts[previousIndex];

 
  const goToNextPost = () => {
    setSelectedPost(nextPost);
    scrollToTop();
    navigate(`/blog/${stringToUrl(nextPost.title)}`); 
  }

  const goToPrevPost = () => {
    setSelectedPost(prevPost);
    scrollToTop();
    navigate(`/blog/${stringToUrl(prevPost.title)}`); 
  }

  return (
    <div className='flex-box'>
      <div className='blogpost-inner-container'>
        <p className='blogPost-title'>{post.title}</p>
        <img className='blogPost-cover' src={getImageUrl(post.imagePath)} alt={post.title} />
        <div className='blogPost-content' dangerouslySetInnerHTML={{__html: post.content}}></div>
        <div className='blogPost-bottom-nav'>
          <div className='left-arrow-box'>
            <img src={leftArrow} alt="previous game" className='left-arrow arrow' onClick={goToPrevPost}/>
          </div>
          <Link className="nav-item-box blogPost-all-link" to ='/'>
            <div className='nav-triangle'></div>
            <span className='nav-link'>All</span>
          </Link>
          <div className='right-arrow-box'>
            <img src={RightArrow} alt="next game" className='right-arrow arrow' onClick={goToNextPost}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;