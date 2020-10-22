import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {pageTransitions} from '../pageTransition';

// import userReducer from "../reducers/index.js"
// import loadUser from "../actions/index.js"
class Welcome extends React.Component {

  
  render() {
    
    return (
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
       className="welcome-page grid-column">
        <div className="welcome-container">
          <h1 className="welcome-heading">
            <strong>Just Breath</strong>
          </h1>
          <h4>enter welcoming text here</h4>

          <div className="center">
          <p className='breath'>Breath With Me</p>
          </div>


          <Link to="/intro_journal">
            <button className="intro_journal_button"> Entry Journal </button>
          </Link>
        </div>

        {/*
          <div className="motivation-container">
            <h1 className="motivation">Motivational Quote Here</h1>
            <button className="motive-shuffler">Shuffle Me!</button>
          </div>
        */}
      </motion.div>
    );
  }
}

export default Welcome;
