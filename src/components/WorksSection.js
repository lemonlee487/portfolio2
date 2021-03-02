import React from 'react'

const WorksSection = ({ image, title, works }) => {
   return (
      <div className="WorksSection">
         <div className="work">
            <div className="work-content">
               <img src={image} alt="" />
               <h5 className="w-title">{title}</h5>
               <p className="w-paragraph">{works}</p>
            </div>
         </div>
      </div>
   )
}

export default WorksSection