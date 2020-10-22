import axios from "axios";
import React from "react";
// import { usersReducer } from '../reducers/users_reducer.js';
import { createNewEntry } from "../actions/user_actions";
import { authReducer } from "../reducers/index";
import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransitions } from "../pageTransition";

const BASE_URL = "http://localhost:3000/api/v1";

class IntroJournal extends React.Component {
  state = {
    content: " ",
    user: {},
    errorMessage: "",
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newPostData = {
      content: this.state.content,
      user_id: this.props.user.id,
    };
    this.props.createNewEntry(newPostData, localStorage.jwtToken);
    this.props.history.push("/profile");
    e.target.reset();
  };

  render() {
    const { content } = this.state;
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitions}
      >
        <h1 className="intro-title">Entry Journal</h1>
        <div className="intro-container">
          <p>
            Before you begin your adventures into <b>Just Breath,</b> please
            take a few minutes to write down anything you wish to express!
          </p>

          <p>
            This is a safe space to let out any negative thoughts, emotions,
            frustrations, and all of the above that have hindered you to feel at
            peace with yourself!{" "}
          </p>
        </div>
        <form className="textarea-form" onSubmit={this.handleSubmit}>
          <label htmlFor="content">What's On Your Mind Today!</label>
          <br />
          <br />
          <textarea
            id="content"
            name="content"
            rows="5"
            cols="33"
            form="userform"
            value={content}
            onChange={this.onChange}
            placeholder="Express Yourself"
          ></textarea>
          <br />
          <button className="submit-button">Submit</button>
        </form>
        {this.state.content}
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};
//alternative way

// const mapDispatchToProps = dispatch =>{
//     return {
//  createNewEntry: () => dispatch(createNewEntry())
//     }
// }

export default connect(mapStateToProps, { createNewEntry })(IntroJournal);
