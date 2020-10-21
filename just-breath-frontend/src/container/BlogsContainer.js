import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions/user_blog_action";
import { postBlogFavorites } from "../actions/favorite_blog_action";
import { authReducer } from "../reducers/index";
import { blogsReducer } from "../reducers/blogs_reducer";

import Flippy, { FrontSide, BackSide } from "react-flippy";

class BlogsContainer extends React.Component {
  state = {
    user: {},
  };

  componentWillMount() {
    this.props.fetchBlogs();
  }

  handleClick = (blog) => {
    const user_id = this.props.user.id;
    this.props.postBlogFavorites(blog.id, user_id, localStorage.jwtToken);
  };

  render() {
    const renderBlogs = this.props.blogs.map((blog) => (
      <div className="blogs-card" key={blog.id}>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => (this.flippy = r)}
        >
          <FrontSide>
            <h3>{blog.title}</h3>
            <img className="blog-image" src={blog.img_url} alt={blog.name} />
          </FrontSide>

          <BackSide>
            <p>{blog.description}</p>
            <a href="null">Read More</a>
          </BackSide>
        </Flippy>
        <button onClick={() => this.handleClick(blog)} className="favorites">
          {" "}
          <i className="fa fa-heart"></i>
        </button>
      </div>
    ));
    return <div className="card-container">{renderBlogs}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogsReducer.blogs,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, { fetchBlogs, postBlogFavorites })(
  BlogsContainer
);
