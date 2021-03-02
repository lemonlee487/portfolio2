import React from 'react'
import SubProject from '../components/SubProject'


const ServicesSection = ({ image, title, projects }) => {
   return (
      <div className="ServicesSection">
         <div className="service">
            <div className="service-content">
               <img src={image} alt="" />
               <h5 className="s-title">{title}</h5>
               <SubProject projects={projects} />
            </div>
         </div>
      </div>
   )
}

export default ServicesSection
