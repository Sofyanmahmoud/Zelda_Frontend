import React from 'react'
import './GameCard.css'
import { Link } from 'react-router-dom'
import { getImageUrl, scrollToTop, stringToUrl } from '../util';

const GameCard = ({post,setSelectedPost}) => {
  return (
    <Link
    className='blog-post-card'
    onClick={()=>{setSelectedPost(post);scrollToTop()}}
    data-aos="fade-up"
    to={`/blog/${stringToUrl(post.title)}`}
    >
     <img src={getImageUrl(post.imagePath)} alt='game start screen'className='blog-card-cover-image'/>
    <p className='blog-post-card-title'>{post.title}</p>
    <div className='blog-post-card-details'>
      <span className='blog-post-card-year'>{post.releaseYear}</span>
      <div className='ball'></div>
      <span className='blog-post-card-system'>{post.system}</span>
    </div>
    </Link>
  )
}

export default GameCard