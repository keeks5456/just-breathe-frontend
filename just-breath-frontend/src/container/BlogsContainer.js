import React from 'react';
import { connect } from 'react-redux';
import { getAllBlogs } from '../actions/user_blog_action'

class BlogsContainer extends React.Component{

    state = {
        blogs: []
    }
    // iterate through the blogs to show up all here
    // have a button to link them to their respective sights 
    //have the button open to a new window?
    //blogs need to be in a card format with the image on top, the desciption in the middle then the link to the site at the bottom
    //blogs needs a star at the top that turns yellow when clicked
    render(){
        console.log(this.props)
        return(
            <div>
                <p> BlogsContainer</p>
            </div>
        )
    }
}

const mapStateToProps = state =>{
   return {
       blogs: state.blogs
    } 
}

export default connect(mapStateToProps) (BlogsContainer)