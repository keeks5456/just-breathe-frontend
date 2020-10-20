import React from "react";
import { connect } from "react-redux";
import { postBlogFavorites } from "../actions/favorite_blog_action";
import { authReducer } from "../reducers/index";
import { blogsReducer } from "../reducers/blogs_reducer";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class UserFavorites extends React.Component {
  render() {
    console.log(this.props.favorite_blogs);
    const favBlogs = this.props.favorite_blogs.map((blog) => (
      <div className="blogs-card-favorite" key={blog.id}>
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
      </div>
    ));
    return (
        <div className="favorites-container">
        <h1 className="blogs-header">Favorite Blogs</h1>
        <div className="favorite-blogs">
          {favBlogs}
        </div>

        <div className="exercises-header">
          <h1>Favorite Exercises</h1>
          {/*call user blogs here and map them to get each one */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorite_blogs: state.authReducer.user.blogs,
  };
};

export default connect(mapStateToProps, { postBlogFavorites })(UserFavorites);
