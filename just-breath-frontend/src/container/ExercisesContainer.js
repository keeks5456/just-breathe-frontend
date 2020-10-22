import React from "react";
import { connect } from "react-redux";
import { fetchExercises } from "../actions/user_exercises_action";
import { postExerciseFavorites } from "../actions/favorite_exercise_action";
import { exercisesReducer } from "../reducers/exercises_reducer";
import { authReducer } from "../reducers/index";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import {pageTransitions} from '../pageTransition';

class ExercisesContainer extends React.Component {
  state = {
    user: {}
  };

  componentWillMount() {
    this.props.fetchExercises();
    console.log("will mount");
  }

  handleClick = (exercise) => {
    const user_id = this.props.user.id;
    this.props.postExerciseFavorites(
      exercise.id,
      user_id,
      localStorage.jwtToken
    );
  };

  toggleLikes = () =>{

  }

  render() {
    console.log(this.props.exercises);
    const renderExercises = this.props.exercises.map((exercise) => (
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
       className="exercise-card" key={exercise.id}>
       
        <h3>{exercise.title}</h3>
        {
          <ReactPlayer
            className="react-player"
            url={exercise.img_url}
            width="600px"
            height="500px"
          />
        }
        <p>{exercise.description}</p>
         <button
          onClick={() => this.handleClick(exercise)}
          className="favorites"
        >
          {" "}
          <i className="fa fa-heart"> like</i>
        </button>
      </motion.div>
    ));
    return <div className="card-container">{renderExercises}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercisesReducer.exercises,
    user: state.authReducer.user,
  };
};
export default connect(mapStateToProps, {
  fetchExercises,
  postExerciseFavorites,
})(ExercisesContainer);
