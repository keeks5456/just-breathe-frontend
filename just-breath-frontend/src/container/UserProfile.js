import React from 'react';
import { connect } from 'react-redux'
import { authReducer } from '../reducers/index'
// import { usersReducer } from '../reducers/users_reducer.js';
import {createNewEntry} from '../actions/user_actions'

class UserProfile extends React.Component{

    state ={
        content: " ",
        user:{},
    }

    handleChange = e =>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = e =>{
        e.preventDefault()
        const newPostData = {
            content: this.state.content,
            user_id: this.props.user.id
        }
        this.props.createNewEntry(newPostData,localStorage.jwtToken)
        e.target.reset()
    }

    render(){
        const {user} = this.props
        const {content} = this.state
     console.log(user)
    
        return(
            <div className="profile-container">
            <div className="avatar-container">
            <img src={user.avatar} alt={user.username}/>
            </div>
            <div className="user-bio">
                <p className='bio-paragraph'><i>{user.bio}</i></p>
            </div>
            <hr/>
            <div>
            <form className='profile-journal-entry'
            onSubmit={this.handleSubmit}
            >
            <label htmlFor='content'>What's On Your Mind Today!
            </label>
            <br/><br/>
            <textarea
            id="content"
            name="content"
            rows="5" 
            cols="33"
            form="userform"
            value={content}
            onChange={this.handleChange}
            placeholder="Express Yourself"></textarea>
            <br/> 
            <button className="submit-button">Submit</button>
            </form>
            </div>

            <div className="card-container">
            {user.journal_entries.map(entry =>
                 <div className="card" key={entry.id}> 
                 {entry.content}
                </div>
            )}
            </div>
            
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.authReducer.user,
        content: state.content
    }

}

export default connect(mapStateToProps,{createNewEntry})(UserProfile)