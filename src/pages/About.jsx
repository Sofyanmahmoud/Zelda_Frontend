import React from 'react'
import "./About.css"
import{aboutIntroText,aboutMainText}from "../constants"
import linkBow from "../assets/link-bow.png"
const About = () => {
  return (
    <div className='about-container'>
      <div className='about-inner-container'>
        <h1 className='about-header' data-aos="fade-down">ABOUT</h1>
        <hr />
        <div className='about-intro-box'>
          <p className='about-intro-text' data-aos="fade-right">{aboutIntroText}</p>
          <img src={linkBow} alt="link with bow and arrow" className='link-about-page' data-aos="fade-left"/>
        </div>
        <div data-aos="fade-up" className='about-content' dangerouslySetInnerHTML={{__html:aboutMainText}}></div>
      </div>
    </div>
  )
}

export default About
