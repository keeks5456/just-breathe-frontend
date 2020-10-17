import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/user_blog_action'
import { blogsReducer } from '../reducers/blogs_reducer.js';
import { authReducer } from '../reducers/index'


class BlogsContainer extends React.Component{
   

    state = {
        blogs: '',

    }
    // iterate through the blogs to show up all here
    // have a button to link them to their respective sights 
    //have the button open to a new window?
    //blogs need to be in a card format with the image on top, the desciption in the middle then the link to the site at the bottom
    //blogs needs a star at the top that turns yellow when clicked
   componentWillMount(){
       this.props.fetchBlogs()
       console.log('from willMount')
   }

   const 

    render(){
        console.log(this.props.blogs)
        const renderBlogs = this.props.blogs.map(blog => (
            <div className="blogs-card" key={blog.id}>
            {<image src={blog.img_url} alt='blog post'/>}
            <p>{blog.description}</p>
            <a href="null">Read More</a>
            </div>
        ))
        return(
            <div>
            {renderBlogs} 
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        blogs: state.blogsReducer.blogs
    } 

}

export default connect(mapStateToProps, {fetchBlogs}) (BlogsContainer)