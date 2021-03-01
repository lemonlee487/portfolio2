import React from 'react'
import allInterest from '../data/allInterest'
import Title from '../components/Title'

const InterestPage = () => {
  return (
    <div>
      <div className="i-title">
        <Title title={"Light Novels"} span={"Favourite"} />
      </div>
      <div className="InterestPage">
        {
          allInterest.map((interest) => {
            return <div className="interest" key={interest.id}>
              <div className="interest-content">
                <img src={interest.image} alt="Image Here" />
                <a href="google.com" className="interest-link">
                  {interest.title}
                </a>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default InterestPage

