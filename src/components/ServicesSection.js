import React from 'react'

const ServicesSection = ({ image, title, text }) => {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo provident placeat ut nisi earum nam. Iure possimus, ducimus rem dolorem omnis molestias velit quod id et voluptas ex, vitae maiores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
