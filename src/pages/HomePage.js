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
          <span> Da Boi</span>
            </h1>
            <p className="h-sub-text">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Dolores, eius nisi eos odit molestiae possimus ipsa, vero quaerat,
               alias suscipit atque! Architecto maxime cupiditate
               aspernatur corporis dolores enim, porro accusamus!
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
