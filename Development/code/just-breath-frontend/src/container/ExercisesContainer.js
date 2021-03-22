import React from 'react';
import { connect } from 'react-redux';
import { fetchExercises } from '../actions/user_exercises_action';
import { postExerciseFavorites } from '../actions/favorite_exercise_action';
import { exercisesReducer } from '../reducers/exercises_reducer';
import { authReducer } from '../reducers/index';
import ReactPlayer from 'react-player';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransitions } from '../pageTransition';
//alert
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ExercisesContainer extends React.Component {
	state = {
		user: {}
	};

	componentWillMount() {
		this.props.fetchExercises();
		console.log('will mount');
	}

	handleClick = (exercise) => {
		const user_id = this.props.user.id;
		this.props.postExerciseFavorites(exercise.id, user_id, localStorage.jwtToken);
	};

	alert = () => {
		toast.dark('Whoot! Added To Favorites!', {
			position: toast.POSITION.TOP_LEFT,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			transition: Zoom
		});
	};

	render() {
		console.log(this.props.exercises);

		const renderExercises = this.props.exercises.map((exercise) => (
			<motion.div
				initial="out"
				animate="in"
				exit="out"
				variants={pageTransitions}
				className="exercise-card"
				key={exercise.id}
			>
				<h3>{exercise.title}</h3>
				<div className="exercise-video">
					{<ReactPlayer className="react-player" url={exercise.img_url} width="100%" height="100%" />}
				</div>
				<p>{exercise.description}</p>
				<button
					onClick={() => {
						this.alert();
						this.handleClick(exercise);
					}}
					className="favorites"
				>
					{' '}
					<i className="fa fa-heart" />
				</button>
			</motion.div>
		));
		return <div className="card-container">{renderExercises}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		exercises: state.exercisesReducer.exercises,
		user: state.authReducer.user
	};
};
export default connect(mapStateToProps, {
	fetchExercises,
	postExerciseFavorites
})(ExercisesContainer);
