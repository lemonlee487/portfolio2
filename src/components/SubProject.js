import React from 'react'

const SubProject = ({ projects }) => {
   return (
      <div className="SubProject">
         {
            projects.map((project) => {
               return <div className="project-container">
                  <a href={project.link} className="s-sub-title">{project.ptitle}:</a>
                  <p className="s-text">{project.techused}</p>
               </div>

            })
         }
      </div>
   )
}

export default SubProject
