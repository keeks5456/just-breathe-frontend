import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {pageTransitions} from '../pageTransition';

// import userReducer from "../reducers/index.js"
// import loadUser from "../actions/index.js"
class Welcome extends React.Component {

  
  render() {
    
    return (
      <div className="welcome-container">
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
       className="welcome-page grid-column">
          <h1 className="welcome-heading">
            <strong>Just Breathe</strong>
            </h1>
            <Link to="/intro_journal">
              <button className="intro_journal_button"> Entry Journal </button>
            </Link>
          <h4 className="temporary-quote">
          “Happiness can be found even in the darkest of times, if one only remembers to turn on the light.” — Albus Dumbledore 
          </h4>

          <div className="center">
          <p className='breath'>Breathe With Me</p>
          </div>


          
          {/*
            <div className="motivation-container">
            <h1 className="motivation">Motivational Quote Here</h1>
            <button className="motive-shuffler">Shuffle Me!</button>
            </div>
          */}
          </motion.div>
          </div>
          );
  }
}

export default Welcome;
