import React from 'react'

const InterestSection = ({ interestlist }) => {
   return (
      interestlist.map((interest) => {
         return <div className="interest" key={interest.id}>
            <div className="interest-content">
               <img src={interest.image} href={interest.link} alt="Here M'lord" />
               <a href={interest.link} className="interest-link">
                  {interest.title}
               </a>
            </div>
         </div>
      })
   )
}

export default InterestSection

