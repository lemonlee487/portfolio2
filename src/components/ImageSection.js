import React from 'react'
import about from '../images/gura-cute.png'

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>Im <span>Ya Boi</span></h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolore, saepe? Inventore blanditiis ad quia quas fuga repellendus
          obcaecati provident alias quis. Qui, repellendus vero
          voluptatibus quidem ipsum voluptatum cupiditate et.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Interests</p>
          </div>
          <div className="right-section">
            <p>:  Lok Yin Lee</p>
            <p>:  Hong Kong</p>
            <p>:  Cantonese, English, Japanese</p>
            <p>:  Coding, Reading Light Novels, Anime</p>
          </div>
        </div>
        <button className="btn">Download My Resume</button>
      </div>
    </div>
  )
}

export default ImageSection
