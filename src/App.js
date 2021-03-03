import './App.scss';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import InterestPage from './pages/InterestPage'
import ContactPage from './pages/ContactPage'
import { Switch, Route } from 'react-router-dom'
import gurapixel from './images/gura-pixel.png'
import { useState } from 'react'

function App() {
   const [navToggle, setNavToggle] = useState(false);

   const navClick = () => {
      setNavToggle(!navToggle)
   }

   return (
      <div className="App">
         <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
            <NavBar />
         </div>
         <div className="nav-btn">
            <img className="open-nav-img" onClick={navClick} src={gurapixel} alt="" />
         </div>
         <div className="main-content">
            <div className="content">
               <Switch>
                  <Route path="/" exact>
                     <HomePage />
                  </Route>
                  <Route path="/about" exact>
                     <AboutPage />
                  </Route>
                  <Route path="/portfolios" exact>
                     <PortfolioPage />
                  </Route>
                  <Route path="/interests" exact>
                     <InterestPage />
                  </Route>
                  <Route path="/contact" exact>
                     <ContactPage />
                  </Route>
               </Switch>
            </div>
         </div>
      </div>
   );
}

export default App;
