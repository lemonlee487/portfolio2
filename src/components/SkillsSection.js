import React from 'react'

const SkillsSection = ({ skill, progress, widthParam }) => {
   return (
      <div className="SkillsSection">
         <div className="skill-container">
            <h5 className="skill-title">{skill}</h5>
            <div className="skill-bar">
               <p className="skill-text">{progress}</p>
               <div className="skill-progress">
                  <div className="progress-bar">
                     <div className="inner-progress" style={{ width: progress }}></div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default SkillsSection
