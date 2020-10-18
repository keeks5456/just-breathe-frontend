import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/user_blog_action'
import { blogsReducer } from '../reducers/blogs_reducer.js';
import { authReducer } from '../reducers/index'


class BlogsContainer extends React.Component{
   

    state = {
        blogs: '',

    }

   componentWillMount(){
       this.props.fetchBlogs()
       console.log('from willMount')
   }

   const 

    render(){
        console.log(this.props.blogs)
        const renderBlogs = this.props.blogs.map(blog => (
            <div className="blogs-card" key={blog.id}>
            {/*the front of flippy */}
            <h2>{blog.title}</h2>

            {<img className="blog-image" src={blog.img_url} alt='blog post'/>}
            {/*the back of flippy */}
            <p>{blog.description}</p>
            <a href="null">Read More</a>
            </div>
        ))
        return(
            
            <div className="card-container">
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