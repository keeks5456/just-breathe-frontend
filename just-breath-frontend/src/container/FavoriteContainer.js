import React from 'react';
import { connect } from 'react-redux';
import { patchBlogFavorites } from '../actions/favorite_blog_action'; 
import { authReducer } from '../reducers/index'
import {blogsReducer} from '../reducers/blogs_reducer';

class UserFavorites extends React.Component{

    state = {
        favorite: false
    }

    componentWillMount(){
        this.props.patchBlogFavorites()
        console.log('mounting')
    }

    render(){
        console.log(this.props.blog)
        return(
            <div className='favorites-container'>
            <div className="favorite-blogs">
            <h1><u>Favorite Blogs</u></h1>
            </div>

            <div className="favorite-exercises">
            <h1><u>Favorite Exercises</u></h1>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        favorite: state.favorite,
        blog: state.blogsReducer.blog,
        user: state.authReducer.user
    }
}


export default connect(mapStateToProps, {patchBlogFavorites})(UserFavorites)