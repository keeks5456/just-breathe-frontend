import React from "react";
import { connect } from "react-redux";
import { fetchExercises } from "../actions/user_exercises_action";
import { exercisesReducer } from "../reducers/exercises_reducer";
import ReactPlayer from "react-player";

class ExercisesContainer extends React.Component {
  state = {
    exercises: [],
  };

  componentWillMount() {
    this.props.fetchExercises();
    console.log("will mount");
  }

  render() {
    console.log(this.props.exercises);
    const renderExercises = this.props.exercises.map((exercise) => (
      <div className="blogs-card" key={exercise.id}>
        <h3>{exercise.title}</h3>
        {
          <ReactPlayer
            className="react-player"
            url={exercise.img_url}
            width="700px"
            height="500px"
          />
        }
        <p>{exercise.description}</p>
      </div>
    ));
    return <div className="card-container">{renderExercises}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercisesReducer.exercises,
  };
};
export default connect(mapStateToProps, { fetchExercises })(ExercisesContainer);
