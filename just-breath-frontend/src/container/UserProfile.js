import React from 'react';
import { connect } from 'react-redux'
import { authReducer } from '../reducers/index'
import { usersReducer } from '../reducers/users_reducer.js';

class UserProfile extends React.Component{

    render(){
        const {user} = this.props
        console.log(this.props.user)
        // const {user, content} = this.props
        return(
            <div className="profile-container">
            <div className="avatar-pic">
            <img src={user.avatar} alt={user.username}/>
            </div>
            <div className="user-bio">
                <p><i><blockquote>{user.bio}</blockquote></i></p>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.authReducer.user,
        
    }

}

export default connect(mapStateToProps)(UserProfile)