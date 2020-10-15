import axios from 'axios';
import React from 'react';
import { usersReducer } from '../reducers/users_reducer.js';
import { authReducer } from '../reducers/index'
import { connect } from 'react-redux';

const BASE_URL = 'http://localhost:3000/api/v1'

class IntroJournal extends React.Component{
    state = {
        content: [],
        user:{},
        errorMessage: ''
    }

    onChange = (e) =>{
        console.log(e.target.value)

        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
       const newPostData = {
           content: this.props.data,
           user: this.props.authReducer
       }
       this.props.addNewPost(this.state)
       fetch(`${BASE_URL}/journal_entries`,{
           method: `POST`,
           headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPostData)
       })
       .then(res => res.json())
       .then(json => {
           console.log(json)
       })
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
    console.log(state)
    return {
        authReducer: state.user,
        content: state.content
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addNewPost: (content) => dispatch({ type: 'NEW_POST', payload: content })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroJournal)