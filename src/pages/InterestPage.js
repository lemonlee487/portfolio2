import React from 'react'
import allInterest from '../data/allInterest'
import Title from '../components/Title'
import InterestSection from '../components/InterestSection'

const InterestPage = () => {
   return (
      <div>
         <div className="i-title">
            <Title title={"Light Novels"} span={"Favourite"} />
         </div>
         <div className="InterestPage">
            <InterestSection interestlist={allInterest[0]} />
         </div>
         <div className="i-title">
            <Title title={"Anime"} span={"Favourite"} />
         </div>
         <div className="InterestPage">
            <InterestSection interestlist={allInterest[1]} />
         </div>
      </div>
   )
}

export default InterestPage

