import React from 'react'
import about from '../images/gura-cute.png'

const ImageSection = () => {
   return (
      <div className="ImageSection">
         <div className="img">
            <img src={about} alt="" />
         </div>
         <div className="about-info">
            <h4>Im <span>Cyrus Lee</span></h4>
            <p className="about-text">
               Bachelor of computing science graduate from the Thompson Rivers University in 2020.
               I have studied various topics during my acadmic journey such as mobile app development and web design,
               as well as some advanced topic such as behavioral biometrics and bioinformatics.
               From time to time, I worked on different personal projects which helped me build confidence on that field.
               As an individual, I am a problem solver and able to work independently without any supervision.
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
