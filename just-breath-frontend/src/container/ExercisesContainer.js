import React from 'react';
import { connect } from 'react-redux';
import {fetchExercises} from '../actions/user_exercises_action'
import {exercisesReducer} from '../reducers/exercises_reducer'

class ExercisesContainer extends React.Component{
    
    state ={
        exercises: []
    } 

    componentWillMount(){
        this.props.fetchExercises()
        console.log('will mount')
    }
    
    render(){
        console.log(this.props.exercises)
        return(
            <div></div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        exercises: state.exercisesReducer.exercises
    } 
}
export default connect(mapStateToProps, {fetchExercises})(ExercisesContainer)