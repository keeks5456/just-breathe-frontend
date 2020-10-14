import axios from 'axios';
import React from 'react';
import { entryFormSubmit } from '../actions/user_actions.js';
import { authReducer } from '../reducers/index'
import { connect } from 'react-redux';

class IntroJournal extends React.Component{
    state = {
        content: []
    }

    onChange = (e) =>{
        console.log(e.target.value)

        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{

        console.log(this.props)
        e.preventDefault()
        let user_id = this.props.user
        // let userContent = this.props.entryFormSubmit(this.state.content, user_id)
        // .then((res) =>{
            console.log(this.state)
            console.log(this.props)
            // console.log(res)
   
        // })
    } //end
    



    render(){
        const {content} = this.state
        return(
            <div>
                <h1>Intro Journal</h1>
                <p>Before you begin your adventures into <b>Just Breath,</b> please take a few minutes to write down anything you wish to express!</p>

                <p>This is a safe space to let out any negative thoughts, emotions, frustrations, and all of the above that have hindered you to feel at peace with yourself! </p>

                <form className="textarea-form" 
                onSubmit={this.handleSubmit}>
                <label htmlFor='content'>What's On Your Mind Today!</label>
                <br/><br/>
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
                <br/> 
                <button className="submit-button">Submit</button>
                </form>
                {this.state.content}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    
    return {
        user: state.user,
        authReducer: state.user,
        content: state.content
    }
}

const mapDispatchToProps = (dispatch) =>({
        entryFormSubmit: content => 
            dispatch(entryFormSubmit(content))
})

export default connect(mapStateToProps, mapDispatchToProps) (IntroJournal)