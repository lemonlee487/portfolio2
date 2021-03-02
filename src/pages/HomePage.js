import React from 'react'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const HomePage = () => {
   return (
      <div className="HomePage">
         <header className="hero">
            <h1 className="hero-text">
               Hi, Im
            <span> Cyrus Lee</span>
            </h1>
            <p className="h-sub-text">
               You only live once, so just do it.
            </p>
            <div className="icons">
               <Link className="icon-link">
                  <FontAwesomeIcon icon={faTwitter} className="icon tw" />
               </Link>
               <a className="icon-link" href="https://www.linkedin.com/in/lok-yin-lee/">
                  <FontAwesomeIcon icon={faLinkedin} className="icon li" />
               </a>
               <a className="icon-link" href="https://github.com/lemonlee487">
                  <FontAwesomeIcon icon={faGithub} className="icon gh" />
               </a>
            </div>
         </header>
      </div>
   )
}

export default HomePage
