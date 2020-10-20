import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions/user_blog_action";
import { patchBlogFavorites } from "../actions/favorite_blog_action";
import { favoritesReducer } from "../reducers/favorites_reducer";
import { authReducer } from "../reducers/index";
import { blogsReducer } from '../reducers/blogs_reducer';
// holds the state of all the favorites

import Flippy, { FrontSide, BackSide } from "react-flippy";

class BlogsContainer extends React.Component {
  state = {
    user: {},
  };

  componentWillMount() {
    this.props.fetchBlogs();
    console.log("from willMount");
  }

  handleClick = (blog) => {
    const user_id = this.props.user
    const blog_id = this.props.blogs

    this.props.patchBlogFavorites(user_id, blog_id,localStorage.jwtToken);
    console.log(user_id, blog_id)
  };

  render() {
    console.log(this.props.blogs);
    const renderBlogs = this.props.blogs.map((blog) => (
      <div className="blogs-card" key={blog.id}>
        {/*if blog is in user favorites render unlike else if it is not then handleCLick, turn red and add to fav blogs*/}
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => (this.flippy = r)}
        >
          <FrontSide>
            <button
              onClick={() => this.handleClick(blog)}
              className="favorites"
            >
              {" "}
              click me
            </button>
            <h3>{blog.title}</h3>
            <img className="blog-image" src={blog.img_url} alt={blog.name} />
          </FrontSide>

          <BackSide>
            <p>{blog.description}</p>
            <a href="null">Read More</a>
          </BackSide>
        </Flippy>
      </div>
    ));
    return <div className="card-container">{renderBlogs}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogsReducer.blogs,
    favorites: state.favoritesReducer.favorites,
    user: state.authReducer.user,

    // we need to change the state of the favorites so the blog knows it was favorited
  };
};

export default connect(mapStateToProps, { fetchBlogs, patchBlogFavorites },  )(BlogsContainer);
